import styled, { css } from 'styled-components';

import { visuallyHidden } from 'shared/styles/mixins';

const RadioButton = styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

const HiddenInput = styled.input`
  ${visuallyHidden};
`;

const Checkmark = styled.span`
  ${(props) => {
    const { colors, gradients } = props.theme;
    return css`
      position: relative;
      height: 1.4286rem;
      width: 1.4286rem;
      border: 0.0714rem solid ${colors.basicLight};
      border-radius: 50%;

      &:after {
        content: '';
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 0.4286rem);
        height: calc(100% - 0.4286rem);
        border-radius: 50%;
        background: ${gradients.primary};
      }

      ${HiddenInput}:checked ~ &:after {
        display: block;
      }

      ${HiddenInput}:checked:hover ~ &,
      ${HiddenInput}:checked:focus ~ & {
        box-shadow: 0 0 0.7142rem ${colors.primary};
      }

      ${HiddenInput}:not(:checked):hover ~ &,
      ${HiddenInput}:not(:checked):focus ~ & {
        box-shadow: 0 0 0.7142rem ${colors.basic};
      }

      ${HiddenInput}:checked ~ & {
        border-color: ${colors.primary};
      }
    `;
  }}
`;

const Label = styled.span`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      margin-left: 0.7143rem;
      color: ${colors.basic};
      user-select: none;

      ${HiddenInput}:checked ~ &,
      ${RadioButton}:hover & {
        color: ${colors.basicDark};
      }
    `;
  }}
`;

export { RadioButton, HiddenInput, Checkmark, Label };
