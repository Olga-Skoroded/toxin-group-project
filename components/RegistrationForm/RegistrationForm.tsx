import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Field, Form } from 'react-final-form';

import AvatarLoader from 'components/AvatarLoader/AvatarLoader';
import Input from 'components/Input/Input';
import RadioButton from 'components/RadioButton/RadioButton';
import Toggle from 'components/Toggle/Toggle';
import { emailValidator, dateValidator, dateFormatMask } from 'shared/helpers/validators';

import * as S from './RegistrationForm.styles';
import { RegistrationFormProps, FormData } from './RegistrationForm.types';

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  isSuccess,
  isProcess,
  statusText,
  requestRegistration,
  stopRegistration,
}: RegistrationFormProps): JSX.Element => {
  const handleRegistrationFormSubmit = (formData: FormData): void => {
    requestRegistration(formData);
  };

  return (
    <>
      <Form
        initialValues={{
          receiveOffers: false,
          gender: 'male',
        }}
        onSubmit={handleRegistrationFormSubmit}
        render={({ handleSubmit }) => (
          <S.RegistrationForm onSubmit={handleSubmit}>
            <S.Title>Регистрация аккаунта</S.Title>
            <S.Avatar>
              <AvatarLoader name="avatar" />
            </S.Avatar>
            <Field
              name="name"
              render={({ input }) => <S.InputWrapper {...input} placeholder="Имя" required />}
            />
            <Field
              name="surname"
              render={({ input, meta }) => (
                <S.InputWrapper {...input} placeholder="Фамилия" required />
              )}
            />
            <S.RadioButtonsWrapper>
              <RadioButton value="male" name="gender" label="Мужчина" />
              <RadioButton value="female" name="gender" label="Женщина" />
            </S.RadioButtonsWrapper>
            <Field
              name="birthDate"
              type="text"
              render={({ input, rest }) => (
                <Input
                  {...rest}
                  {...input}
                  placeholder="ДД.ММ.ГГГГ"
                  label="Дата рождения"
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
                    label="Данные для входа в сервис"
                    placeholder="Email"
                    validators={[emailValidator]}
                  />
                )}
              />
              <Field
                name="password"
                type="password"
                render={({ input }) => <S.InputWrapper {...input} required placeholder="Пароль" />}
              />
            </S.AccountEntryWrapper>
            <S.SpecialOfferWrapper>
              <Toggle name="receiveOffers" label="Получать спецпредложения" />
            </S.SpecialOfferWrapper>
            <S.RegisterButton isFlat isFilled>
              Перейти к оплате
            </S.RegisterButton>
            <S.AlreadyRegisterWrapper>
              <span>Уже есть аккаунт на Toxin</span>
              <S.EntryButton href="/auth">Войти</S.EntryButton>
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
        message={statusText}
        action={
          <>
            <IconButton size="medium" aria-label="close" color="inherit" onClick={stopRegistration}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </>
  );
};

export default RegistrationForm;
