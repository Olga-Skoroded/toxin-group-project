import { createGlobalStyle, css } from 'styled-components';

import { Theme } from '../types/theme';

type Props = {
  theme: Theme;
};

const GlobalStyle = createGlobalStyle<Props>`
  ${(props) => {
    const { colors, typography } = props.theme;
    return css`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      html {
        font-size: ${typography.fontSize};
        background: ${colors.defaultBackground};
        color: ${colors.basicDark};
        font-family: ${typography.fontName};
      }
    `;
  }}
`;

export default GlobalStyle;
