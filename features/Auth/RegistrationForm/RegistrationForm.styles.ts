import Snackbar from '@material-ui/core/Snackbar';
import styled, { css } from 'styled-components';

import { titles } from 'shared/styles/mixins';
import { ArrowButton, Button, Input } from 'shared/view/elements';

type EntryButton = {
  href: string;
};

type SnackBar = {
  theme: 'success' | 'error';
};

const RegistrationForm = styled.form`
  ${(props) => {
    const { colors } = props.theme;

    return css`
      max-width: 27.1429rem;
      box-shadow: 0 0 1.7857rem rgba(0, 0, 0, 0.2);
      padding: 3rem 2.1rem 2rem 2.1rem;
      border: 0.0714rem solid rgba(0, 0, 0, 0.12);
      border-radius: 0.2857rem;
      background: ${colors.defaultBackground};

      & > div {
        padding: 0;
      }
    `;
  }}
`;

const Title = styled.h2`
  ${titles.h1()};
  margin-bottom: 1.4rem;
`;

const Avatar = styled.div`
  max-width: max-content;
  margin: 0 auto 1.4rem auto;
`;

const AlreadyRegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.3rem;
`;

const InputWrapper = styled(Input)`
  margin-bottom: 0.6rem;
`;

const RadioButtonsWrapper = styled.div`
  display: flex;

  & > label {
    margin: 0.2rem 1.5rem 1.5rem 0;
  }
`;

const AccountEntryWrapper = styled.div`
  margin-top: 1.2rem;

  & > div {
    padding: 0;
  }
`;

const RegisterButton = styled(ArrowButton)`
  margin-top: 1.7rem;
  height: 3.1rem;
`;

const EntryButton = styled(Button)<EntryButton>`
  width: 7rem;
  margin-left: 2.45rem;
`;

const SpecialOfferWrapper = styled.div`
  & > label {
    width: fit-content;
    align-items: center;
  }
`;

const CustomSnackBar = styled(Snackbar)<SnackBar>`
  ${(props) => {
    const { theme } = props;

    return css`
      & > div {
        background: ${theme === 'success' ? 'green' : 'darkred'};
      }
    `;
  }}
`;

export {
  RegistrationForm,
  Title,
  Avatar,
  AlreadyRegisterWrapper,
  InputWrapper,
  RadioButtonsWrapper,
  AccountEntryWrapper,
  RegisterButton,
  EntryButton,
  SpecialOfferWrapper,
  CustomSnackBar,
};
