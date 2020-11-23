import { css } from 'styled-components';

const visuallyHidden = css`
  position: absolute;
  width: 0;
  height: 0;
  border: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
`;

export { visuallyHidden };
