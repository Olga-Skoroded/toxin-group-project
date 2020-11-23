export type Theme = {
  typography: {
    fontName: string;
    secondaryFontName: string;
    fontSize: string;
    lineHeight: string;
  };
  colors: {
    primary: string;
    primaryVariant: string;
    secondary: string;
    secondaryVariant: string;
    basicLightest: string;
    basicPale: string;
    basicLight: string;
    basic: string;
    basicDark: string;
    basicDarkest: string;
    defaultBackground: string;
    error: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    primaryLight: string;
    secondaryLight: string;
    secondaryLighten: string;
  };
};
