import { memo, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {
  updateAdditionalUserData,
  completeAdditionalUserDataUpdate,
} from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication/model';
import { PopUpNotification } from 'shared/view/components';
import { Button, Input } from 'shared/view/elements';
import { dateValidator, dateFormatMask } from 'utils/validators';

type StateProps = {
  isPending: boolean;
  isSuccess: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.profile.isUpdateAdditionalUserDataPending,
  isSuccess: state.profile.isUpdateAdditionalUserDataSuccess,
  isCompleted: state.profile.isUpdateAdditionalUserDataCompleted,
  statusText: state.profile.updateAdditionalUserDataStatusText,
});

const mapDispatch = {
  startUpdateAdditionalUserData: updateAdditionalUserData,
  stopUpdateAdditionalUserData: completeAdditionalUserDataUpdate,
};

type OwnProps = {
  user: User;
  birthday: string;
  onChange: (title: string) => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  birthday: string;
};

const EditBirthday = memo(
  ({
    user,
    birthday,
    isPending,
    isSuccess,
    isCompleted,
    statusText,
    onChange,
    startUpdateAdditionalUserData,
    stopUpdateAdditionalUserData,
  }: Props) => {
    const onSubmit = ({ birthday: newBirthday }: FormData) => {
      startUpdateAdditionalUserData({ user, data: { birthDate: newBirthday } });
    };

    useEffect(() => {
      stopUpdateAdditionalUserData();
    }, [stopUpdateAdditionalUserData]);

    const handleConfirmButtonClick = () => {
      stopUpdateAdditionalUserData();
      if (isSuccess) onChange('');
    };

    const { t } = useTranslation('PersonalInfoPage');

    return (
      <Form
        initialValues={{ birthday }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              <Field
                name="birthday"
                validate={dateValidator}
                render={({ input }) => (
                  <Input
                    {...input}
                    validators={[dateValidator]}
                    placeholder={t('DD.MM.YYYY')}
                    mask={dateFormatMask}
                  />
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

const ConnectedComponent = connect(mapState, mapDispatch)(EditBirthday);
export { ConnectedComponent as EditBirthday };
