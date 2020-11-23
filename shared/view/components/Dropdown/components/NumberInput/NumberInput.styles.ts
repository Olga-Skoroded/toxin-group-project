import styled, { css } from 'styled-components';

const Button = styled.button`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      width: 2.1429rem;
      height: 2.1429rem;
      border: 0.0714rem solid ${colors.basicLight};
      border-radius: 50%;
      background-color: transparent;
      font: inherit;
      color: ${colors.basic};
      cursor: pointer;

      &:disabled {
        cursor: auto;
        opacity: 0.38;
      }
    `;
  }}
`;

const Input = styled.input`
  max-width: 2.2857rem;
  border: 0;
  font: inherit;
  text-align: center;
  color: inherit;

  &:focus {
    outline: 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;

export { Button, Input, InputContainer };
