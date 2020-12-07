import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';
import { Input } from 'shared/view/elements';

const ContactUsForm = styled.section`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 27.1429rem;
      background: ${colors.defaultBackground};
      padding: 2.75rem 2rem 2rem 2.05rem;
      border: 0.0714rem solid rgba(0, 0, 0, 0.12);
      box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
      border-radius: 0.2857rem;
    `;
  }}
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  ${titles.h2};
`;

const InputWrapper = styled(Input)`
  margin-bottom: 0.6rem;
`;

const Label = styled.label`
  ${titles.h3};
`;

const TextArea = styled.textarea`
  ${(props) => {
    const { colors } = props.theme;
    return css`
      width: 100%;
      height: 15rem;
      border-radius: 0.2857rem;
      border: 0.0714rem solid ${colors.basicLight};
      padding: 0.9643rem;
      margin-bottom: 1.5rem;
      font-family: inherit;
      resize: none;

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

export { ContactUsForm, Title, Label, InputWrapper, TextArea };
