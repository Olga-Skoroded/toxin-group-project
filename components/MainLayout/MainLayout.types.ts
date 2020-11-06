export type Props = {
  children?: JSX.Element;
  authStatusText: string;
  displayName: string;
  isAuthSuccess: boolean;
  wasFinishedAuthChecking: boolean;
  preloadAuth: () => void;
};

export type State = {
  auth: Props;
};
