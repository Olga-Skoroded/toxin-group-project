import styled, { css } from 'styled-components';

const List = styled.ul`
  width: 100%;
  list-style: none;
`;

const Item = styled.li`
  ${(props) => {
    const { typography } = props.theme;
    return css`
      display: grid;
      grid-template-columns: 1fr max-content;
      gap: 0 0.7143rem;
      width: 100%;
      justify-content: space-between;
      line-height: ${typography.lineHeight};

      &:not(:last-child) {
        margin-bottom: 0.7143rem;
      }
    `;
  }}
`;

const TooltipText = styled.div`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      display: flex;
      visibility: hidden;
      padding: 1.4286rem;
      justify-content: center;
      align-items: center;
      min-width: 7.1429rem;
      min-height: 3.5714rem;
      max-width: 14.2857rem;
      width: max-content;
      position: absolute;
      background-color: white;
      right: 0;
      z-index: 3;
      top: 1.4286rem;
      color: ${colors.basicDark};
      border: 0.0714rem solid ${colors.basicDarkest};
      cursor: default;
      overflow-wrap: anywhere;
      transition: 0.3s;
      opacity: 0;
    `;
  }}
`;

const Tooltip = styled.div`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      position: relative;
      width: 1.4286rem;
      height: 1.4286rem;
      font-weight: 700;
      font-size: 0.8571rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      flex-shrink: 0;
      color: ${colors.basicLight};
      border: 0.0714rem solid ${colors.basicLight};
      cursor: pointer;

      &:hover,
      &:focus {
        ${TooltipText} {
          visibility: visible;
          opacity: 1;
        }
      }
    `;
  }}
`;

const Price = styled.div``;

const Label = styled.span`
  display: flex;
  justify-content: space-between;
  box-sizing: content-box;
  position: relative;
  width: 100%;
  margin-right: 0.7143rem;
  max-width: 17.1429rem;
`;

const LabelText = styled.p`
  margin: 0;
  width: 100%;
  max-width: 15.3571rem;
`;

export { List, Item, Price, Label, Tooltip, TooltipText, LabelText };
