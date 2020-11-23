import styled, { css } from 'styled-components';

import { materialIcons } from 'shared/styles/mixins';
import * as S from 'shared/view/elements/TextButton/TextButton';

type ListContainerProps = {
  isOpen: boolean;
};

type ResetButtonProps = {
  isHidden: boolean;
};

const Result = styled.button<ListContainerProps>`
  ${(props) => {
    const { colors, typography } = props.theme;
    const { isOpen } = props;

    return css`
      position: relative;
      width: 100%;
      padding: 0.9643rem 2.5rem 0.8571rem 0.9286rem;
      border-radius: 0.2857rem 0.2857rem 0 0;
      border: 0.0714rem solid ${colors.basicLight};
      text-align: left;
      font: 1rem ${typography.fontName};
      line-height: 1.2857rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background-color: transparent;
      cursor: pointer;

      &::placeholder {
        font-family: ${typography.fontName};
        color: ${colors.basicDark};
      }

      &:hover,
      &:focus {
        border: 0.0714rem solid ${colors.basic};
        outline: none;
      }

      &::before {
        content: 'keyboard_arrow_${isOpen ? 'up' : 'down'}';
        position: absolute;
        background-color: ${colors.basicDark};
        ${materialIcons};
        right: 0.8571rem;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 1.5rem;
      }
    `;
  }}
`;

const Dropdown = styled.div`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      position: relative;

      &:hover > ${Result}, &:focus > ${Result} {
        border: 0.0714rem solid ${colors.basic};
      }
    `;
  }}
`;

const ListContainer = styled.div<ListContainerProps>`
  ${(props) => {
    const { colors } = props.theme;
    const { isOpen } = props;
    return css`
      display: ${isOpen ? 'block' : 'none'};
      width: 100%;
      background-color: ${colors.defaultBackground};
      position: absolute;
      z-index: 5;
      bottom: 0;
      left: 0;
      padding: 0 0.5rem 0 0.9286rem;
      transform: translate(0, 100%);
      border: 0.0714rem solid ${colors.basic};
      ${isOpen &&
      css`
        border-top: 0;
      `}
      border-radius: 0 0 0.2857rem 0.2857rem;
    `;
  }}
`;

const List = styled.ul`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      padding-bottom: 1.2857rem;
      font: 700 0.8571rem ${typography.fontName};
      line-height: 1.0714rem;
      text-transform: uppercase;
    `;
  }}
`;

const Item = styled.li`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${colors.basicDarkest};
      padding: 0.3571rem 0 0.1429rem 0;
    `;
  }}
`;

const ItemTitle = styled.span`
  word-break: break-word;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.9286rem;
`;

const ResetButton = styled(S.TextButton)<ResetButtonProps>`
  ${(props) => {
    const { isHidden } = props;

    return (
      isHidden &&
      css`
        visibility: hidden;
      `
    );
  }}
`;

export { Dropdown, Result, List, Item, ItemTitle, ListContainer, Controls, ResetButton };
