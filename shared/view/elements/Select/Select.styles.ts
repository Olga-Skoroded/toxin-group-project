import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  ${titles.h3}
`;

const Select = styled.select`
  ${({ theme }) => {
    const { colors } = theme;
    return css`
      width: 100%;
      border-radius: 0.2857rem;
      border: 0.0714rem solid ${colors.basicLight};
      padding: 0.9643rem;
      font-family: inherit;

      &:hover,
      &:focus {
        border: 0.0714rem solid ${colors.basic};
        outline: none;
      }
    `;
  }}
`;

export { Label, Select };
