import styled, { css } from 'styled-components';

import { CustomProps } from './DotButton.model';

const DotButton = styled.button<CustomProps>`
  ${(props) => {
    const { isActive } = props;

    return css`
      background-color: transparent;
      width: 0.5714rem;
      height: 0.5714rem;
      border: 0.0714rem solid white;
      border-radius: 50%;
      cursor: pointer;

      ${isActive &&
      css`
        background-color: white;
      `}

      &:hover, &:focus {
        outline: 0;
        background-color: white;
      }
    `;
  }}
`;

export { DotButton };
