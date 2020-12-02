import { createGlobalStyle, css } from 'styled-components';

import { Theme } from '../model/theme';

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

      body,
      html {
        height: 100%;
      }

      #__next {
        display: flex;
        flex-direction: column;
        min-height: 100%;
      }
    `;
  }}
`;

export { GlobalStyle };
