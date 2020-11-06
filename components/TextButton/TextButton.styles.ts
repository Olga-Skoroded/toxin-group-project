import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { TextButtonProps } from './TextButton.types';

const TextButton = styled.button<TextButtonProps>`
  ${(props) => {
    const { colors, typography } = props.theme;
    const { isSecondary } = props;

    return css`
      text-transform: uppercase;
      font: 700 0.8571rem ${typography.fontName};
      background-color: transparent;
      border: 0;
      cursor: pointer;
      text-decoration: none;
      color: ${isSecondary ? colors.basic : colors.primary};

      &:hover,
      &:focus {
        outline: 0;
        color: ${isSecondary ? lighten(0.5, colors.basic) : lighten(0.1, colors.primary)};
      }

      &:disabled {
        color: ${colors.basicLight};
      }
    `;
  }}
`;

export { TextButton };
