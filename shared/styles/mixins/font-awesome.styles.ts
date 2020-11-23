import { css } from 'styled-components';

const fontAwesome = css`
  /* stylelint-disable font-family-no-missing-generic-family-keyword */
  font-family: 'FA Brands';
  font-style: normal;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'liga';
  background-clip: text;
  /* stylelint-disable property-no-vendor-prefix */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

export { fontAwesome };
