import styled, { css } from 'styled-components';

import { breakpointDown } from 'shared/styles/break-points';

type Container = {
  isShownMenu: boolean;
};

const Container = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 1rem;
  padding-right: 1rem;

  @media ${breakpointDown('lg')} {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.0714rem solid gainsboro;
    padding: 0.6rem;
    border-radius: 0.5714rem;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 2rem;
  }
`;

const SelectedLanguage = styled.span`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      margin-right: 0.5rem;
      font-weight: bold;
      color: ${colors.basic};

      &:hover {
        color: ${colors.basicDarkest};
      }
    `;
  }}
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

const MenuContainer = styled.ul<Container>`
  ${(props) => {
    const { isShownMenu } = props;

    return css`
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: ${isShownMenu ? 'block' : 'none'};
      z-index: 10;
      padding: 1.5rem;
      background: white;
      list-style: none;

      @media ${breakpointDown('lg')} {
        position: relative;
        transform: translate(0);
        left: 0;
        padding: 0;
      }
    `;
  }}
`;

const MenuItem = styled.li`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      margin: 0;
      padding: 0.5rem;
      border-bottom: 0.2rem solid ${colors.primary};
      transition: all 0.1s ease-in-out;
      color: ${colors.basic};

      &:hover {
        transform: scale(1.1);
        color: ${colors.basicDarkest};
      }
    `;
  }}
`;

export { SelectedLanguage, Container, IconExpander, MenuContainer, MenuItem };
