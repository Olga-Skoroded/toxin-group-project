import { memo, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { passwordUpdate, completePasswordUpdate } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication';
import { PopUpNotification } from 'shared/view/components';
import { Button, PasswordField } from 'shared/view/elements';
import { passwordValidator } from 'utils/validators';

type StateProps = {
  user: User;
  isPending: boolean;
  isSuccess: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  user: state.auth.user,
  isPending: state.profile.isPasswordUpdatePending,
  isSuccess: state.profile.isPasswordUpdateSuccess,
  isCompleted: state.profile.isPasswordUpdateCompleted,
  statusText: state.profile.passwordUpdateStatusText,
});

const mapDispatch = {
  startPasswordUpdate: passwordUpdate,
  stopPasswordUpdate: completePasswordUpdate,
};

type OwnProps = {
  onChange: () => void;
};

type Props = StateProps & OwnProps & typeof mapDispatch;

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const PasswordUpdate = memo(
  ({
    user,
    isPending,
    isSuccess,
    isCompleted,
    statusText,
    onChange,
    startPasswordUpdate,
    stopPasswordUpdate,
  }: Props) => {
    const onSubmit = ({ currentPassword, newPassword, confirmPassword }: FormData) => {
      startPasswordUpdate({ user, currentPassword, newPassword, confirmPassword });
    };

    const isUserRegistered = user.providerData.some((value) => value.providerId === 'password');

    useEffect(() => {
      stopPasswordUpdate();
    }, [stopPasswordUpdate]);

    const handleConfirmButtonClick = () => {
      stopPasswordUpdate();
      if (isSuccess) onChange();
    };

    const { t } = useTranslation('LoginAndSecurityPage');

    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              {isUserRegistered && (
                <Field
                  name="currentPassword"
                  type="password"
                  render={({ input }) => (
                    <PasswordField {...input} label={t('Current password')} required />
                  )}
                />
              )}
              <Field
                name="newPassword"
                type="password"
                validate={passwordValidator}
                render={({ input }) => (
                  <PasswordField
                    {...input}
                    validators={[passwordValidator]}
                    minLength={8}
                    label={t('New password')}
                    required
                  />
                )}
              />
              <Field
                name="confirmPassword"
                type="password"
                render={({ input }) => <PasswordField {...input} label={t('Confirm password')} />}
              />
              <Button disabled={isPending} isFlat isFilled>
                {t('Update password')}
              </Button>
            </form>
            {isCompleted && (
              <PopUpNotification
                message={t(statusText)}
                onConfirmButtonClick={handleConfirmButtonClick}
              />
            )}
          </>
        )}
      />
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(PasswordUpdate);
export { ConnectedComponent as PasswordUpdate };
