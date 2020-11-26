import styled, { css } from 'styled-components';

import { materialIcons } from 'shared/styles/mixins';

import { Input as BasicInput } from '../Input/Input';

type ButtonProps = {
  isVisible: boolean;
};

const Container = styled.div`
  position: relative;
`;

const Input = styled(BasicInput)`
  padding-right: 2.5rem;
`;

const VisibilityButton = styled.button<ButtonProps>`
  ${(props) => {
    const { colors, typography } = props.theme;
    const { isVisible } = props;
    return css`
      position: absolute;
      height: 3.1429rem;
      right: 0;
      bottom: 1.2857rem;
      font-size: 1.5rem;
      line-height: ${typography.lineHeight};
      ${materialIcons}
      background-image: linear-gradient(${colors.basicLight}, ${colors.basicLight});
      padding: 0 0.6964rem;
      border: none;
      cursor: pointer;

      &:hover {
        background-image: linear-gradient(${colors.basicLightest}, ${colors.basicLightest});
      }

      ${isVisible
        ? css`
            &::before {
              content: 'visibility_off';
            }
          `
        : css`
            &::before {
              content: 'visibility';
            }
          `}
    `;
  }}
`;

export { VisibilityButton, Container, Input };
