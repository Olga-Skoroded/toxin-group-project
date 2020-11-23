import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';
import { ArrowButton, Input } from 'shared/view/elements';

const ForgotPasswordForm = styled.section`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      position: relative;
      max-width: 27.1429rem;
      padding: 2.75rem 2rem 2rem 2.05rem;
      background: ${colors.defaultBackground};
      box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
      border: 0.0714rem solid rgba(0, 0, 0, 0.12);
      border-radius: 0.2857rem;
    `;
  }}
`;

const Title = styled.h1`
  ${titles.h1()}
  margin-bottom: 1.4285rem;
`;

const InputWrapper = styled(Input)``;

const NextButton = styled(ArrowButton)`
  height: 3.1rem;
  margin-top: 1.0714rem;
`;

export { ForgotPasswordForm, Title, InputWrapper, NextButton };
