import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

type ListItem = {
  withSubMenu?: boolean;
};

const ListItem = styled.li<ListItem>`
  ${(props) => {
    const { withSubMenu } = props;

    return css`
      position: relative;
      list-style: none;

      margin-right: ${withSubMenu ? '1.7rem' : '0'};

      @media ${breakpointDown('lg')} {
        margin: 0.5rem 0;
        width: 100%;
      }
    `;
  }}
`;

const NavContainer = styled.nav`
  @media ${breakpointDown('lg')} {
    margin-right: 0;
  }

  ul {
    display: flex;

    @media ${breakpointDown('lg')} {
      justify-content: end;
      flex-direction: column;
      align-items: center;
      min-width: 20rem;

      & > li {
        padding: 0.3rem 0;
      }
    }
  }
`;

export { ListItem, NavContainer };
