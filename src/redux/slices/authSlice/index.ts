import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthState } from "../../../types";

const initialState: IAuthState = {
  accessToken: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<IAuthState>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
