import { memo, useEffect } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {
  updateAdditionalUserData,
  completeAdditionalUserDataUpdate,
} from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication/model';
import { PopUpNotification } from 'shared/view/components';
import { Button, RadioButton } from 'shared/view/elements';

import * as S from './EditGender.styles';

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
  gender: string;
  onChange: (title: string) => void;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  gender: 'female' | 'male';
};

const EditGender = memo(
  ({
    user,
    gender,
    isPending,
    isSuccess,
    isCompleted,
    statusText,
    onChange,
    startUpdateAdditionalUserData,
    stopUpdateAdditionalUserData,
  }: Props) => {
    const onSubmit = ({ gender: newGender }: FormData) => {
      startUpdateAdditionalUserData({ user, data: { gender: newGender } });
    };

    useEffect(() => {
      stopUpdateAdditionalUserData();
    }, [stopUpdateAdditionalUserData]);

    const mapGender = {
      Male: 'male',
      Female: 'female',
      Мужчина: 'male',
      Женщина: 'female',
    };

    const handleConfirmButtonClick = () => {
      stopUpdateAdditionalUserData();
      if (isSuccess) onChange('');
    };

    const { t } = useTranslation('PersonalInfoPage');

    return (
      <Form
        initialValues={{ gender: mapGender[gender] }}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <>
            <form onSubmit={handleSubmit}>
              <S.Gender>
                <RadioButton name="gender" value="male" label={t('Male')} />
                <RadioButton name="gender" value="female" label={t('Female')} />
              </S.Gender>
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

const ConnectedComponent = connect(mapState, mapDispatch)(EditGender);
export { ConnectedComponent as EditGender };
