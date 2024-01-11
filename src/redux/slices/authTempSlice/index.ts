import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthState } from "../../../types";

const initialState: IAuthState = {
  accessToken: "",
  refreshToken: "",
};

const authTempSlice = createSlice({
  name: "auth-temp",
  initialState,
  reducers: {
    setTempToken(state, action: PayloadAction<IAuthState>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { setTempToken } = authTempSlice.actions;
export default authTempSlice.reducer;
