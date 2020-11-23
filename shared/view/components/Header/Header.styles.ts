import styled, { css } from 'styled-components';

import { breakpointUp, breakpointDown } from 'shared/styles/break-points';
import { Logo } from 'shared/view/elements';

type MobileMenu = {
  isShown?: boolean;
};

const MobileMenu = styled.div<MobileMenu>`
  ${(props) => {
    const { isShown } = props;

    return css`
      display: ${isShown ? 'flex' : 'none'};
      align-items: center;
      justify-content: flex-end;

      @media ${breakpointUp('xl')} {
        display: flex;
        width: 100%;
      }

      @media ${breakpointDown('lg')} {
        flex-direction: column;
      }
    `;
  }}
`;

const HamburgerButtonWrapper = styled.button`
  display: none;
  border: none;
  background: inherit;

  & > svg {
    cursor: pointer;
  }

  @media ${breakpointDown('lg')} {
    display: block;
  }
`;

const Header = styled.header`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      padding-left: 10rem;
      padding-right: 10rem;
      display: flex;
      align-items: center;
      min-height: 5rem;
      box-shadow: 0 0.7143rem 1.4286rem ${colors.basicLightest};

      @media ${breakpointDown('xl')} {
        padding-left: 4.2857rem;
        padding-right: 4.2857rem;
      }

      @media ${breakpointDown('lg')} {
        flex-direction: column;
        min-height: 100%;
      }
    `;
  }}
`;

const HeaderLogo = styled(Logo)`
  @media ${breakpointDown('lg')} {
    margin: 1rem 1.5rem;
  }
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.4286rem;

  @media ${breakpointDown('lg')} {
    width: 100%;
    justify-content: space-between;
  }
`;

const AccountPanel = styled.div`
  @media ${breakpointDown('lg')} {
    width: 100%;
    text-align: center;
  }
`;

export { MobileMenu, HamburgerButtonWrapper, Header, AccountPanel, HeaderLogo, HeaderLogoWrapper };
