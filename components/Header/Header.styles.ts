import styled, { css } from 'styled-components';

import Logo from 'components/Logo/Logo';

type MobileMenu = {
  isShown?: boolean;
};

const MobileMenu = styled.div<MobileMenu>`
  ${(props) => {
    const { isShown } = props;

    return css`
      display: ${isShown ? 'flex' : 'none'};
      align-items: center;

      @media (min-width: 1051px) {
        display: flex;
        width: 100%;
      }

      @media (max-width: 1050px) {
        flex-direction: column;
      }
    `;
  }}
`;

const HamburgerButtonWrapper = styled.button`
  border: none;
  background: inherit;

  & > svg {
    cursor: pointer;
    display: none;

    @media (max-width: 1050px) {
      display: block;
    }
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

      @media (max-width: 1200px) {
        padding-left: 4.2857rem;
        padding-right: 4.2857rem;
      }

      @media (max-width: 1050px) {
        flex-direction: column;
        min-height: 100%;
      }
    `;
  }}
`;

const HeaderLogo = styled(Logo)`
  @media (max-width: 1050px) {
    margin: 0.5rem 1.5rem;
  }
`;

const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.4286rem;

  @media (max-width: 1050px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const AccountPanel = styled.div`
  @media (max-width: 1050px) {
    width: 100%;
    text-align: center;
  }
`;

export { MobileMenu, HamburgerButtonWrapper, Header, AccountPanel, HeaderLogo, HeaderLogoWrapper };
