import styled, { css } from 'styled-components';

const Textarea = styled.textarea`
  ${(props) => {
    const { typography, colors } = props.theme;

    return css`
      width: 100%;
      min-height: 8.5714rem;
      resize: none;
      overflow: hidden;
      font-family: ${typography.fontName};

      border-radius: 0.2857rem;
      border: 0.0714rem solid ${colors.basicLight};
      padding: 0.9643rem;

      &::placeholder {
        color: ${colors.basicLight};
      }

      &:hover,
      &:focus {
        border: 0.0714rem solid ${colors.basic};
        outline: none;

        ::placeholder {
          color: ${colors.basicDark};
        }
      }
    `;
  }}
`;

export { Textarea };
