import { useEffect } from 'react';
import { Form } from 'react-final-form';
import { connect } from 'react-redux';

import {
  updateAdditionalUserData,
  updateAdditionalUserDataCompleted,
} from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';
import { User } from 'services/api/Firebase/modules/Authentication/types';
import { PopUpNotification } from 'shared/view/components';
import { Button, RadioButton } from 'shared/view/elements';

import * as S from './EditGender.styles';

type StateProps = {
  isPending: boolean;
  isCompleted: boolean;
  statusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.profile.isUpdateAdditionalUserDataPending,
  isCompleted: state.profile.isUpdateAdditionalUserDataCompleted,
  statusText: state.profile.updateAdditionalUserDataStatusText,
});

const mapDispatch = {
  startUpdateAdditionalUserData: updateAdditionalUserData,
  stopUpdateAdditionalUserData: updateAdditionalUserDataCompleted,
};

type OwnProps = {
  user: User;
  gender: string;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

type FormData = {
  gender: 'female' | 'male';
};

const EditGender = ({
  user,
  gender,
  isPending,
  isCompleted,
  statusText,
  startUpdateAdditionalUserData,
  stopUpdateAdditionalUserData,
}: Props): JSX.Element => {
  const onSubmit = ({ gender: newGender }: FormData) => {
    startUpdateAdditionalUserData({ user, data: { gender: newGender } });
  };

  useEffect(() => {
    stopUpdateAdditionalUserData();
  }, [stopUpdateAdditionalUserData]);

  const mapGender = {
    Мужчина: 'male',
    Женщина: 'female',
  };

  return (
    <Form
      initialValues={{ gender: mapGender[gender] }}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <form onSubmit={handleSubmit}>
            <S.Gender>
              <RadioButton name="gender" value="male" label="Мужчина" />
              <RadioButton name="gender" value="female" label="Женщина" />
            </S.Gender>
            <Button disabled={isPending} isFlat isFilled>
              Сохранить
            </Button>
          </form>
          {isCompleted && (
            <PopUpNotification
              message={statusText}
              onConfirmButtonClick={stopUpdateAdditionalUserData}
            />
          )}
        </>
      )}
    />
  );
};

const ConnectedComponent = connect(mapState, mapDispatch)(EditGender);
export { ConnectedComponent as EditGender };
