import { configureStore } from "@reduxjs/toolkit";
import {
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  FLUSH,
  PAUSE,
  persistStore,
} from "redux-persist";

import reducer from "./slices";

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REGISTER, REHYDRATE, PURGE, FLUSH, PAUSE],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
