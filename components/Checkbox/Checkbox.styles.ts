/* eslint-disable object-curly-newline */
import styled, { css } from 'styled-components';

import { visuallyHidden } from 'shared/styles/mixins';

const Checkbox = styled.label`
  display: inline-flex;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
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
      border-radius: 0.2857rem;
      flex-shrink: 0;

      &:after {
        content: '';
        display: none;
        position: absolute;
        width: 0.2857rem;
        height: 0.4286rem;
        border-right: 0.1429rem solid;
        border-bottom: 0.1429rem solid;
        border-image: ${gradients.primary};
        border-image-slice: 1;
        left: 0.4429rem;
        top: 0.3rem;
        transform: rotate(45deg);
      }

      ${HiddenCheckbox}:checked ~ & {
        border: 0.0714rem solid ${colors.primary};
      }

      ${HiddenCheckbox}:checked:hover ~ &,
      ${HiddenCheckbox}:checked:focus ~ & {
        box-shadow: 0 0 0.7142rem ${colors.primary};
      }

      ${HiddenCheckbox}:not(:checked):hover ~ &,
      ${HiddenCheckbox}:not(:checked):focus ~ & {
        box-shadow: 0 0 0.7142rem ${colors.basic};
      }

      ${HiddenCheckbox}:checked ~ &:after {
        display: block;
      }
    `;
  }}
`;

const Label = styled.span`
  margin: auto 0 auto 0.7143rem;
  line-height: 1.38;
  user-select: none;
`;

export { Checkbox, HiddenCheckbox, Checkmark, Label };
