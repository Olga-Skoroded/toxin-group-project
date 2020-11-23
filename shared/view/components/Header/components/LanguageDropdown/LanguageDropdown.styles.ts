import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

type Container = {
  isShownMenu: boolean;
};

type MenuItem = {
  isActive?: boolean;
};

const SelectedLanguage = styled.div``;

const Container = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      position: relative;
      cursor: pointer;
      margin-right: 1rem;
      padding: 0 1rem;
      border-left: 1px solid ${colors.basicLight};
      border-right: 1px solid ${colors.basicLight};

      @media ${breakpointDown('lg')} {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0.0714rem solid gainsboro;
        padding: 0.6rem;
        border-radius: 0.5714rem;
        flex-direction: column;
        width: 100%;
        margin: 0 0 2rem;
      }
    `;
  }}
`;

const IconExpander = styled.span`
  width: 1.5rem;
  height: 100%;
  position: absolute;
  right: 0;
  cursor: pointer;
  display: none;

  & > svg {
    width: 100%;
    height: 100%;
  }

  @media ${breakpointDown('lg')} {
    display: block;
    top: 0;
    width: 3.5rem;
  }
`;

const MenuContainer = styled.div<Container>`
  ${(props) => {
    const { isShownMenu } = props;

    return css`
      padding: 1.5rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      background: white;
      display: ${isShownMenu ? 'block' : 'none'};

      @media ${breakpointDown('lg')} {
        position: relative;
        transform: translate(0);
        left: 0;
        padding: 0;
      }
    `;
  }}
`;

const MenuItem = styled.div<MenuItem>`
  ${(props) => {
    const { colors } = props.theme;
    const { isActive } = props;

    return css`
      margin: 0;
      padding: 0.5rem;
      border-bottom: 0.2rem solid ${colors.primary};
      transition: all 0.1s ease-in-out;
      color: ${colors.basic};
      font-weight: ${isActive ? 'bold' : 'normal'};

      &:hover {
        transform: scale(1.1);
      }
    `;
  }}
`;

export { SelectedLanguage, Container, IconExpander, MenuContainer, MenuItem };
