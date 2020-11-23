import styled, { css } from 'styled-components';

import { visuallyHidden } from 'shared/styles/mixins';

const Toggle = styled.label`
  display: flex;
  width: max-content;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  ${visuallyHidden};
`;

const Checkmark = styled.span`
  ${(props) => {
    const { colors, gradients } = props.theme;
    return css`
      min-width: 2.8571rem;
      height: 1.4286rem;
      position: relative;
      border: 0.0714rem solid ${colors.basicLight};
      border-radius: 0.7143rem;

      &:before {
        content: '';
        position: absolute;
        height: 0.8571rem;
        width: 0.8571rem;
        left: 0.2143rem;
        top: 50%;
        transform: translateY(-50%);
        background: ${colors.basicLight};
        border-radius: 50%;
        transition: 0.4s;
      }

      ${HiddenInput}:checked:hover ~ &,
      ${HiddenInput}:checked:focus ~ & {
        box-shadow: 0 0 0.7142rem ${colors.primary};
      }

      ${HiddenInput}:not(:checked):hover ~ &,
      ${HiddenInput}:not(:checked):focus ~ & {
        box-shadow: 0 0 0.7142rem ${colors.basic};
      }

      ${HiddenInput}:checked + & {
        border-color: ${colors.primary};
      }

      ${HiddenInput}:checked + &:before {
        background-image: ${gradients.primary};
        left: 1.6429rem;
      }
    `;
  }}
`;

const Label = styled.span`
  margin: auto 0 auto 0.7143rem;
  line-height: 1.38;
  user-select: none;
`;

export { Toggle, HiddenInput, Checkmark, Label };
