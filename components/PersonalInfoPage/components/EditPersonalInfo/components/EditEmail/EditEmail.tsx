import { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { emailUpdate, emailUpdateCompleted } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { emailValidator } from 'shared/helpers/validators';

type StateProps = {
  isPending: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.profile.isEmailUpdatePending,
  isCompleted: state.profile.isEmailUpdateCompleted,
  statusText: state.profile.emailUpdateStatusText,
});

const mapDispatch = {
  startEmailUpdate: emailUpdate,
  stopEmailUpdate: emailUpdateCompleted,
};

type OwnProps = {
  user: User;
  email: string;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const EditEmail = ({
  user,
  email,
  isPending,
  isCompleted,
  statusText,
  startEmailUpdate,
  stopEmailUpdate,
}: Props): JSX.Element => {
  const onSubmit = ({ email: emailForUpdate }: { email: string }) => {
    startEmailUpdate({ user, email: emailForUpdate });
  };

  useEffect(() => {
    stopEmailUpdate();
  }, [stopEmailUpdate]);

  return (
    <Form
      initialValues={{ email }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              type="email"
              validate={emailValidator}
              render={({ input }) => (
                <Input {...input} placeholder="Email" validators={[emailValidator]} />
              )}
            />
            <Button disabled={isPending} isFlat isFilled>
              Сохранить
            </Button>
          </form>
          {isCompleted && (
            <PopUpNotification message={statusText} onConfirmButtonClick={stopEmailUpdate} />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(EditEmail);
