import { useState, useEffect, useCallback, useMemo } from 'react';
import { connect } from 'react-redux';

import { AdditionalUserInformation } from 'api/entities/types';
import { User } from 'api/Firebase/modules/Authentication/types';
import { getAdditionalUserData as getAdditionalUserDataRequest } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';

import EditPersonalInfo from '../EditPersonalInfo/EditPersonalInfo';
import { data } from './PersonalInfo.data';
import * as S from './PersonalInfo.styles';

type StateProps = {
  user: User;
  isSuccess: boolean;
  additionalUserData: AdditionalUserInformation;
};

const mapState = (state: AppState): StateProps => ({
  user: state.auth.user,
  isSuccess: state.profile.isGetAdditionalUserDataSuccess,
  additionalUserData: state.profile.additionalUserData,
});

const mapDispatch = {
  startGetAdditionalUserData: getAdditionalUserDataRequest,
};

type Props = StateProps & typeof mapDispatch;

const PersonalInfo = ({
  user,
  isSuccess,
  additionalUserData,
  startGetAdditionalUserData,
}: Props): JSX.Element => {
  const [userData, setUserData] = useState({
    displayName: '',
    gender: '',
    birthday: '',
    email: '',
  });
  const [currentEditing, setCurrentEditing] = useState('');

  const getAdditionalUserData = useCallback(
    (currentUser) => {
      startGetAdditionalUserData(currentUser);
    },
    [startGetAdditionalUserData],
  );

  useEffect(() => {
    if (user) getAdditionalUserData(user);
  }, [getAdditionalUserData, user, currentEditing]);

  const mapGender = useMemo(
    () => ({
      female: 'Женщина',
      male: 'Мужчина',
    }),
    [],
  );

  const setAdditionalUserData = useCallback(() => {
    const { displayName, email } = user;

    setUserData({
      displayName,
      email,
      gender: additionalUserData ? mapGender[additionalUserData.gender] : '',
      birthday: additionalUserData ? additionalUserData.birthDate : '',
    });
  }, [additionalUserData, mapGender, user]);

  useEffect(() => {
    if (isSuccess) setAdditionalUserData();
  }, [setAdditionalUserData, isSuccess]);

  const accountData = data.map((elem) => {
    return { ...elem, value: userData[elem.component] };
  });

  const handleEditButtonClick = (title: string) => {
    if (title === currentEditing) {
      setCurrentEditing('');
    } else {
      setCurrentEditing(title);
    }
  };

  return (
    <S.PersonalInfo>
      {accountData.map((elem) => (
        <S.Item key={elem.title}>
          <EditPersonalInfo
            user={user}
            currentEditing={currentEditing}
            onEditButtonClick={handleEditButtonClick}
            {...elem}
          />
        </S.Item>
      ))}
    </S.PersonalInfo>
  );
};

export default connect(mapState, mapDispatch)(PersonalInfo);
