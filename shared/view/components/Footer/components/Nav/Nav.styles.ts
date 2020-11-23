import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';
import { Container } from 'shared/view/components/FooterNav/components/NavItem.styles';

const Nav = styled.nav`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      width: 100%;
      display: flex;
      margin-right: 3.5714rem;

      @media ${breakpointDown('md')} {
        flex-direction: column;
        margin-right: 0;

        ${Container} {
          border-bottom: 0.0714rem solid ${colors.basicPale};
          padding-bottom: 2.1429rem;
          margin-right: 0;

          &:not(:last-child) {
            margin-bottom: 2.1429rem;
          }
        }
      }
    `;
  }}
`;

export { Nav };
