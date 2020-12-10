import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

type SubMenu = {
  isShown?: boolean;
};

const NavLink = styled.div`
  position: relative;

  @media ${breakpointDown('lg')} {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.0714rem solid gainsboro;
    padding: 0.6rem;
    border-radius: 0.5714rem;
    flex-direction: column;
    width: 100%;
  }
`;

const IconExpander = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 1.5rem;
  height: 100%;
  cursor: pointer;

  & > svg {
    width: 100%;
    height: 100%;
  }

  @media ${breakpointDown('lg')} {
    width: 3.5rem;
  }
`;

const Link = styled.a`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      color: ${colors.basic};
      text-decoration: none;
      margin-right: 1.5rem;
      position: relative;
      display: inline-block;

      &:hover {
        color: ${colors.basicDarkest};
      }

      @media ${breakpointDown('lg')} {
        margin-right: 0;
      }
    `;
  }}
`;

const SubMenuLink = styled(Link)`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      margin: 0;
      padding: 0.5rem;
      border-bottom: 0.2rem solid ${colors.primary};
      transition: all 0.1s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    `;
  }}
`;

const SubMenuList = styled.ul<SubMenu>`
  ${(props) => {
    const { colors } = props.theme;
    const { isShown } = props;

    return css`
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      display: ${isShown ? 'flex' : 'none'};
      flex-direction: column;
      width: max-content;
      max-width: 11rem;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: ${colors.defaultBackground};
      list-style: none;
      text-align: center;

      @media ${breakpointDown('lg')} {
        position: relative;
        transform: translate(0);
        left: 0;
        padding: 0;
      }
    `;
  }}
`;

const SubMenuItem = styled.li``;

export { NavLink, IconExpander, Link, SubMenuLink, SubMenuList, SubMenuItem };
