import styled, { css } from 'styled-components';

import { Props } from './Button.types';

const Button = styled.a<Props>`
  ${(props) => {
    const { gradients, colors, typography } = props.theme;
    const { isFilled, isFlat, isDisabled } = props;
    return css`
      width: max-content;
      position: relative;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.0714rem 1.3571rem 1rem;
      ${isFlat &&
      css`
        padding-top: 0.7143rem;
        padding-bottom: 0.7143rem;
      `}
      white-space: nowrap;
      text-align: center;
      background-color: transparent;
      border: 0;
      z-index: 1;
      border-radius: 1.5714rem;
      font: 700 0.8571rem ${typography.fontName};
      background-image: ${isDisabled ? gradients.primaryLight : gradients.primary};
      color: ${isFilled ? colors.defaultBackground : colors.primary};
      font-weight: 700;
      text-transform: uppercase;
      text-decoration: none;
      outline: 0;
      overflow: hidden;
      cursor: ${isDisabled ? 'default' : 'pointer'};
      pointer-events: ${isDisabled ? 'none' : 'auto'};

      ${!isFilled &&
      css`
        &::before {
          content: '';
          position: absolute;
          z-index: -1;
          background-color: ${colors.defaultBackground};
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: calc(100% - 0.2857rem);
          width: calc(100% - 0.2857rem);
          border-radius: 1.5714rem;
        }
      `}

      &:hover,
      &:focus {
        box-shadow: 0 0 1.0714rem ${colors.primary};
      }

      &:disabled {
        cursor: auto;
        box-shadow: none;
        opacity: 0.7;
      }
    `;
  }}
`;

export { Button };
