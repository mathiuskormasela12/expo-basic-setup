import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setToken } from "@/src/redux/slices/authSlice";
import { setTempToken } from "@/src/redux/slices/authTempSlice";
import { AppDispatch, RootState } from "@/src/redux/store";
import { RegisterScreenHook } from "@/src/types";

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
