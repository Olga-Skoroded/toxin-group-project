import styled, { css } from 'styled-components';

import { materialIcons } from 'shared/styles/mixins';

const Container = styled.div`
  flex: 1;

  ${(props) => {
    const { colors } = props.theme;

    return css`
      border-top: 1px solid ${colors.basicLight};
      padding: 0.5rem;
    `;
  }}
`;

const MessageArea = styled.textarea`
  ${(props) => {
    const { typography } = props.theme;

    return css`
      min-height: 100%;
      min-width: 88%;
      outline: none;
      border: none;
      resize: none;
      font-family: ${typography.fontName};
    `;
  }}
`;

const SubmitButton = styled.button`
  ${(props) => {
    const { gradients, typography } = props.theme;
    return css`
      position: absolute;
      height: 3.1429rem;
      right: 0.6rem;
      font-size: 1.7143rem;
      line-height: ${typography.lineHeight};
      ${materialIcons}
      background-image: ${gradients.primary};
      border: none;
      cursor: pointer;
      outline: none;

      &:hover {
        background-image: ${gradients.primaryLight};
      }

      &::before {
        content: 'send';
      }
    `;
  }}
`;

export { Container, MessageArea, SubmitButton };
