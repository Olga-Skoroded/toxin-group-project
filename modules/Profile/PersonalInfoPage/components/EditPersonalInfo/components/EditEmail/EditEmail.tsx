import { memo, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { emailUpdate, completeEmailUpdate } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication/model';
import { PopUpNotification } from 'shared/view/components';
import { Button, Input } from 'shared/view/elements';
import { emailValidator } from 'utils/validators';

type StateProps = {
  isPending: boolean;
  isSuccess: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.profile.isEmailUpdatePending,
  isSuccess: state.profile.isEmailUpdateSuccess,
  isCompleted: state.profile.isEmailUpdateCompleted,
  statusText: state.profile.emailUpdateStatusText,
});

const mapDispatch = {
  startEmailUpdate: emailUpdate,
  stopEmailUpdate: completeEmailUpdate,
};

type OwnProps = {
  user: User;
  email: string;
  onChange: (title: string) => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const EditEmail = memo(
  ({
    user,
    email,
    isPending,
    isSuccess,
    isCompleted,
    statusText,
    onChange,
    startEmailUpdate,
    stopEmailUpdate,
  }: Props) => {
    const onSubmit = ({ email: emailForUpdate }: { email: string }) => {
      startEmailUpdate({ user, email: emailForUpdate });
    };

    useEffect(() => {
      stopEmailUpdate();
    }, [stopEmailUpdate]);

    const handleConfirmButtonClick = () => {
      stopEmailUpdate();
      if (isSuccess) onChange('');
    };

    const { t } = useTranslation('PersonalInfoPage');

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
                {t('Save')}
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

const ConnectedComponent = connect(mapState, mapDispatch)(EditEmail);
export { ConnectedComponent as EditEmail };
