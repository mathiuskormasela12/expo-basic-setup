export type RegisterScreenHook = () => {
  accessToken: string;
  accessTokenTemp: string;
  handleToken(): void;
  handleTokenTemp(): void;
};
