import { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { passwordUpdate, passwordUpdateCompleted } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { passwordValidator } from 'shared/helpers/validators/passwordValidator';

type StateProps = {
  user: User;
  isPending: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  user: state.auth.user,
  isPending: state.profile.isPasswordUpdatePending,
  isCompleted: state.profile.isPasswordUpdateCompleted,
  statusText: state.profile.passwordUpdateStatusText,
});

const mapDispatch = {
  startPasswordUpdate: passwordUpdate,
  stopPasswordUpdate: passwordUpdateCompleted,
};

type Props = StateProps & typeof mapDispatch;

type FormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const PasswordUpdate = ({
  user,
  isPending,
  isCompleted,
  statusText,
  startPasswordUpdate,
  stopPasswordUpdate,
}: Props): JSX.Element => {
  const onSubmit = ({ currentPassword, newPassword, confirmPassword }: FormData) => {
    startPasswordUpdate({ user, currentPassword, newPassword, confirmPassword });
  };

  const isUserRegistered = user.providerData.some((value) => value.providerId === 'password');

  useEffect(() => {
    stopPasswordUpdate();
  }, [stopPasswordUpdate]);

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
                render={({ input }) => <Input {...input} label="Текущий пароль" required />}
              />
            )}
            <Field
              name="newPassword"
              type="password"
              validate={passwordValidator}
              render={({ input }) => (
                <Input
                  {...input}
                  validators={[passwordValidator]}
                  minLength={8}
                  label="Новый пароль"
                  required
                />
              )}
            />
            <Field
              name="confirmPassword"
              type="password"
              render={({ input }) => <Input {...input} label="Подтвердите пароль" />}
            />
            <Button disabled={isPending} isFlat isFilled>
              Обновить пароль
            </Button>
          </form>
          {isCompleted && (
            <PopUpNotification message={statusText} onConfirmButtonClick={stopPasswordUpdate} />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(PasswordUpdate);
