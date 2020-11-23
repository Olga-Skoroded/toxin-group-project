import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

const Copyright = styled.p`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      margin: 0;
      color: ${colors.basicDark};
      line-height: 1.2143rem;

      @media ${breakpointDown('md')} {
        margin-bottom: 1.7857rem;
      }
    `;
  }}
`;

export { Copyright };
