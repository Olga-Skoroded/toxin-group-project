import { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';

import { User } from 'api/Firebase/modules/Authentication/types';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import PopUpNotification from 'components/PopUpNotification/PopUpNotification';
import { usernameUpdate, usernameUpdateCompleted } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';

type StateProps = {
  isPending: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.profile.isUsernameUpdatePending,
  isCompleted: state.profile.isUsernameUpdateCompleted,
  statusText: state.profile.usernameUpdateStatusText,
});

const mapDispatch = {
  startUsernameUpdate: usernameUpdate,
  stopUsernameUpdate: usernameUpdateCompleted,
};

type OwnProps = {
  user: User;
  displayName: string;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  name: string;
  surname: string;
};

const EditDisplayName = ({
  user,
  displayName,
  isPending,
  isCompleted,
  statusText,
  startUsernameUpdate,
  stopUsernameUpdate,
}: Props): JSX.Element => {
  const onSubmit = ({ name, surname }: FormData) => {
    startUsernameUpdate({ user, displayName: `${name} ${surname}` });
  };

  const [name, surname] = displayName.split(' ');

  useEffect(() => {
    stopUsernameUpdate();
  }, [stopUsernameUpdate]);

  return (
    <Form
      initialValues={{ name, surname }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              render={({ input }) => <Input {...input} label="Имя" placeholder="Имя" required />}
            />
            <Field
              name="surname"
              render={({ input }) => (
                <Input {...input} label="Фамилия" placeholder="Фамилия" required />
              )}
            />
            <Button disabled={isPending} isFlat isFilled>
              Сохранить
            </Button>
          </form>
          {isCompleted && (
            <PopUpNotification message={statusText} onConfirmButtonClick={stopUsernameUpdate} />
          )}
        </>
      )}
    />
  );
};

export default connect(mapState, mapDispatch)(EditDisplayName);
