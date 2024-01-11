import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setToken } from "../redux/slices/authSlice";
import { setTempToken } from "../redux/slices/authTempSlice";
import { AppDispatch, RootState } from "../redux/store";
import { RegisterScreenHook } from "../types";

export const useRegister: RegisterScreenHook = () => {
  const dispatch = useDispatch<AppDispatch>();
  const accessToken = useSelector(
    (states: RootState) => states.authReducer.accessToken,
  );
  const accessTokenTemp = useSelector(
    (states: RootState) => states.authTempReducer.accessToken,
  );

  const handleToken = useCallback((): void => {
    dispatch(
      setToken({
        accessToken: Date.now().toString(),
        refreshToken: Date.now().toString(),
      }),
    );
  }, []);

  const handleTokenTemp = useCallback((): void => {
    dispatch(
      setTempToken({
        accessToken: Date.now().toString(),
        refreshToken: Date.now().toString(),
      }),
    );
  }, []);

  return {
    accessToken,
    accessTokenTemp,
    handleToken,
    handleTokenTemp,
  };
};
