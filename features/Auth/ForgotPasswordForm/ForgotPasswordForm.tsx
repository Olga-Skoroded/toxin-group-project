import { memo } from 'react';
import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { passwordReset, completePasswordReset } from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.model';
import { PopUpNotification } from 'shared/view/components';
import { emailValidator } from 'utils/validators';

import * as S from './ForgotPasswordForm.style';

type StateProps = {
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isCompleted: state.auth.isPasswordResetCompleted,
  statusText: state.auth.passwordResetStatusText,
});

const mapDispatch = {
  startPasswordReset: passwordReset,
  stopPasswordReset: completePasswordReset,
};

type FormData = {
  email: string;
};

type Props = StateProps & typeof mapDispatch;

const ForgotPasswordForm = memo(
  ({ isCompleted, statusText, startPasswordReset, stopPasswordReset }: Props) => {
    const onFormSubmit = ({ email }: FormData) => {
      startPasswordReset(email);
    };
    const { t } = useTranslation(['ForgotPasswordForm', 'Buttons']);

    return (
      <S.ForgotPasswordForm>
        <S.Title>{t('Account recovery')}</S.Title>
        <Form
          onSubmit={onFormSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="email"
                type="email"
                render={({ input }) => (
                  <S.InputWrapper
                    {...input}
                    label={t('Email address')}
                    placeholder="Email"
                    validators={[emailValidator]}
                  />
                )}
              />
              <S.NextButton isFlat isFilled>
                {t('Buttons:Next')}
              </S.NextButton>
            </form>
          )}
        />
        {isCompleted && (
          <PopUpNotification
            message={t(`Auth:${statusText}`)}
            onConfirmButtonClick={stopPasswordReset}
          />
        )}
      </S.ForgotPasswordForm>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(ForgotPasswordForm);
export { ConnectedComponent as ForgotPasswordForm };
