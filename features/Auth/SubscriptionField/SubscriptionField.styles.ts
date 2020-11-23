import styled, { css } from 'styled-components';

import { materialIcons } from 'shared/styles/mixins';
import { Input as BasicInput } from 'shared/view/elements';

const Input = styled(BasicInput)`
  padding-right: 2.5rem;
`;

const SubmitButton = styled.button`
  ${(props) => {
    const { gradients, typography } = props.theme;
    return css`
      position: absolute;
      height: 3.1429rem;
      right: 0;
      top: 0;
      font-size: 1.7143rem;
      line-height: ${typography.lineHeight};
      ${materialIcons}
      background-image: ${gradients.primary};
      padding: 0 0.6964rem;
      border: none;
      cursor: pointer;

      &:hover {
        background-image: ${gradients.primaryLight};
      }

      &::before {
        content: 'arrow_forward';
      }
    `;
  }}
`;

const Container = styled.div`
  position: relative;
`;

export { SubmitButton, Container, Input };
