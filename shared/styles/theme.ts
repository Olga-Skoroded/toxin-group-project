import { Theme } from '../model/theme';

const typographyColorValue = '31, 32, 65';
const primaryColorValue = '188, 156, 255';
const primaryVariantColorValue = '139, 164, 249';
const secondaryColorValue = '111, 207, 151';
const secondaryVariantColorValue = '102, 210, 234';

const purpleThemePalette: Theme = {
  typography: {
    fontName: 'Montserrat, Arial, sans-serif',
    secondaryFontName: '"Open Sans", Arial, sans-serif',
    fontSize: '14px',
    lineHeight: '1.7142',
  },
  colors: {
    primary: `rgb(${primaryColorValue})`,
    primaryVariant: `rgb(${primaryVariantColorValue})`,
    secondary: `rgb(${secondaryColorValue})`,
    secondaryVariant: `rgb(${secondaryVariantColorValue})`,
    basicLightest: `rgba(${typographyColorValue}, 0.05)`,
    basicPale: `rgba(${typographyColorValue}, 0.1)`,
    basicLight: `rgba(${typographyColorValue}, 0.25)`,
    basic: `rgba(${typographyColorValue}, 0.5)`,
    basicDark: `rgba(${typographyColorValue}, 0.75)`,
    basicDarkest: `rgb(${typographyColorValue})`,
    error: 'rgb(244, 67, 54)',
    defaultBackground: 'rgb(255, 255, 255)',
  },
  gradients: {
    primary: `linear-gradient(180deg, rgb(${primaryColorValue}) 0%, rgb(${primaryVariantColorValue}) 100%)`,
    secondary: `linear-gradient(180deg, rgb(${secondaryColorValue}) 0%, rgb(${secondaryVariantColorValue}) 100%)`,
    primaryLight: `linear-gradient(180deg, rgba(${primaryColorValue}, 0.5) 0%, rgba(${primaryVariantColorValue}, 0.5) 100%)`,
    secondaryLight: `linear-gradient(180deg, rgba(${secondaryColorValue}, 0.5) 0%, rgba(${secondaryVariantColorValue}, 0.5) 100%)`,
    secondaryLighten: `linear-gradient(180deg, rgba(${primaryColorValue}, 0.25) 0%, rgba(${primaryVariantColorValue}, 0.25) 100%)`,
  },
};

export { purpleThemePalette };
