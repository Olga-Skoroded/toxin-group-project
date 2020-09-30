import { css, FlattenSimpleInterpolation } from 'styled-components';

type FontType =
  | 'thin'
  | 'thin-italic'
  | 'light'
  | 'light-italic'
  | 'regular'
  | 'regular-italic'
  | 'medium'
  | 'medium-italic'
  | 'bold'
  | 'bold-italic'
  | 'black'
  | 'black-italic';

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export default function fontFace(
  fontFamily: string,
  folderName: string,
  type: FontType,
  fontWeight: FontWeight = 400,
  fontStyle: 'normal' | 'italic' = 'normal',
): FlattenSimpleInterpolation {
  return css`
    @font-face {
      font-family: '${fontFamily}';
      /* stylelint-disable declaration-colon-newline-after */
      src: url('/fonts/${folderName}/${folderName}-${type}.woff2') format('woff2'),
        url('/fonts/${folderName}/${folderName}-${type}.woff') format('woff');
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
      font-display: optional;
    }
  `;
}
