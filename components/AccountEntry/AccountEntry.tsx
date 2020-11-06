import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Field, Form } from 'react-final-form';

import ArrowButton from 'components/ArrowButton/ArrowButton';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import * as S from './AccountEntry.styled';

type UserData = {
  email: string;
  password: string;
};

type Props = {
  isAuthSuccess: boolean;
  isAuthProcessNow: boolean;
  authStatusText: string;
  requestToAuth: ({ email, password }) => void;
  requestToAuthWithGoogle: () => void;
  breakAuthProcess: () => void;
};

const AccountEntry: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    isAuthSuccess,
    isAuthProcessNow,
    authStatusText,
    requestToAuth,
    requestToAuthWithGoogle,
    breakAuthProcess,
  } = props;

  const handleFormSubmit = (formData: UserData): void => {
    const { email, password } = formData;

    requestToAuth({ email, password });
  };

  return (
    <S.AccountEntry>
      <S.Title>Войти</S.Title>
      <Form
        onSubmit={handleFormSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <S.FieldsWrapper>
              <Field
                name="email"
                type="email"
                render={({ input }) => <Input {...input} placeholder="Email" required />}
              />
              <Field
                name="password"
                type="password"
                render={({ input }) => <Input {...input} placeholder="Пароль" required />}
              />
            </S.FieldsWrapper>
            <ArrowButton isFilled>Войти</ArrowButton>
            <S.TwoCols>
              <S.CenteredButton type="button" onClick={requestToAuthWithGoogle}>
                Вход через аккаунт Google
                <S.GoogleIcon icon="google" />
              </S.CenteredButton>
            </S.TwoCols>
            <S.TwoCols>
              <span>Нет аккаунта на Toxin?</span>
              <Button href="/registration">Создать</Button>
            </S.TwoCols>
          </form>
        )}
      />
      <S.CustomSnackBar
        theme={isAuthSuccess ? 'success' : 'error'}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isAuthProcessNow}
        autoHideDuration={3000}
        onClose={breakAuthProcess}
        message={authStatusText}
        action={
          <>
            <IconButton size="medium" aria-label="close" color="inherit" onClick={breakAuthProcess}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </S.AccountEntry>
  );
};

export default AccountEntry;
