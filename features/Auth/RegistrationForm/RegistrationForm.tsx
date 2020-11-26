import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { memo } from 'react';
import { Field, Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';

import { AvatarLoader } from 'shared/view/components';
import { Input, RadioButton, Toggle, PasswordField } from 'shared/view/elements';
import { emailValidator, dateValidator, dateFormatMask } from 'utils/validators';

import { RegistrationFormProps, FormData } from './RegistrationForm.model';
import * as S from './RegistrationForm.styles';

const namePattern = '([A-zА-я0-9À-žs]){2,}';

const RegistrationForm = memo(
  ({
    isSuccess,
    isProcess,
    statusText,
    requestRegistration,
    stopRegistration,
  }: RegistrationFormProps) => {
    const handleRegistrationFormSubmit = (formData: FormData): void => {
      requestRegistration(formData);
    };
    const { t } = useTranslation(['RegistrationForm', 'Shared']);

    return (
      <>
        <Form
          initialValues={{
            hasSpecialOffers: false,
            gender: 'male',
          }}
          onSubmit={handleRegistrationFormSubmit}
          render={({ handleSubmit }) => (
            <S.RegistrationForm onSubmit={handleSubmit}>
              <S.Title>{t('Create account')}</S.Title>
              <S.Avatar>
                <AvatarLoader name="avatar" />
              </S.Avatar>
              <Field
                name="name"
                render={({ input }) => (
                  <S.InputWrapper
                    {...input}
                    placeholder={t('Shared:Name')}
                    required
                    pattern={namePattern}
                  />
                )}
              />
              <Field
                name="surname"
                render={({ input }) => (
                  <S.InputWrapper
                    {...input}
                    placeholder={t('Shared:Surname')}
                    required
                    pattern={namePattern}
                  />
                )}
              />
              <S.RadioButtonsWrapper>
                <RadioButton value="male" name="gender" label={t('Shared:Male')} required />
                <RadioButton value="female" name="gender" label={t('Shared:Female')} />
              </S.RadioButtonsWrapper>
              <Field
                name="birthDate"
                type="text"
                render={({ input, rest }) => (
                  <Input
                    {...rest}
                    {...input}
                    placeholder={t('Date mask')}
                    label={t('Birthday date')}
                    validators={[dateValidator]}
                    mask={dateFormatMask}
                    required
                  />
                )}
              />
              <S.AccountEntryWrapper>
                <Field
                  name="email"
                  type="email"
                  render={({ input }) => (
                    <S.InputWrapper
                      {...input}
                      required
                      label={t('Service login details')}
                      placeholder={t('Email')}
                      validators={[emailValidator]}
                    />
                  )}
                />
                <Field
                  name="password"
                  type="password"
                  render={({ input }) => (
                    <PasswordField {...input} required placeholder={t('Shared:Password')} />
                  )}
                />
              </S.AccountEntryWrapper>
              <S.SpecialOfferWrapper>
                <Toggle name="hasSpecialOffers" label={t('Receive special offers')} />
              </S.SpecialOfferWrapper>
              <S.RegisterButton isFlat isFilled>
                {t('Shared:Register')}
              </S.RegisterButton>
              <S.AlreadyRegisterWrapper>
                <span>{t('Already have an account on Toxin')}</span>
                <S.EntryButton href="/auth/login">{t('Shared:Entry')}</S.EntryButton>
              </S.AlreadyRegisterWrapper>
            </S.RegistrationForm>
          )}
        />
        <S.CustomSnackBar
          theme={isSuccess ? 'success' : 'failed'}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={!isSuccess && isProcess && Boolean(statusText)}
          autoHideDuration={3000}
          onClose={stopRegistration}
          message={t(`Auth:${statusText}`)}
          action={
            <>
              <IconButton
                size="medium"
                aria-label="close"
                color="inherit"
                onClick={stopRegistration}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          }
        />
      </>
    );
  },
);

export { RegistrationForm };
