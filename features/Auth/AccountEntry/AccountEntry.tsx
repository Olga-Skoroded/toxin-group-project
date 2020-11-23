import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { memo } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { ArrowButton, Button, Input } from 'shared/view/elements';

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

const AccountEntry = memo((props: Props) => {
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

  const { t } = useTranslation(['AccountEntry', 'Buttons']);

  return (
    <S.AccountEntry>
      <S.Title>{t('Buttons:Sign In')}</S.Title>
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
                render={({ input, meta }) => (
                  <Input {...input} {...meta} placeholder={t('Shared:Password')} required />
                )}
              />
            </S.FieldsWrapper>
            <ArrowButton isFilled>{t('Buttons:Sign In')}</ArrowButton>
            <S.TwoCols>
              <S.CenteredButton type="button" onClick={requestToAuthWithGoogle}>
                {t('AccountEntry:Sign In with account google')}
                <S.GoogleIcon icon="google" />
              </S.CenteredButton>
            </S.TwoCols>
            <S.TwoCols>
              <span>{t('AccountEntry:No Toxin account?')}</span>
              <Button href="/auth/sign-up">{t('Buttons:Sign up')}</Button>
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
        message={t(`Auth:${authStatusText}`)}
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
});

export { AccountEntry };
