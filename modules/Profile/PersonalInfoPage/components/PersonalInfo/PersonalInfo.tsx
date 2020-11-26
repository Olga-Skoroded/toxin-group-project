import { useState, useEffect, useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { getAdditionalUserData as getAdditionalUserDataRequest } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.model';
import { AdditionalUserInformation } from 'services/api/entities/model';
import { User } from 'services/api/Firebase/modules/Authentication';

import { EditAvatar } from '../EditAvatar/EditAvatar';
import { EditPersonalInfo } from '../EditPersonalInfo/EditPersonalInfo';
import { data } from './PersonalInfo.fixture';
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

const PersonalInfo = memo(
  ({ user, isSuccess, additionalUserData, startGetAdditionalUserData }: Props) => {
    const [userData, setUserData] = useState({
      displayName: '',
      gender: '',
      birthday: '',
      email: '',
      photoURL: '',
    });
    const [currentEditing, setCurrentEditing] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    const getAdditionalUserData = useCallback(
      (currentUser) => {
        startGetAdditionalUserData(currentUser);
      },
      [startGetAdditionalUserData],
    );

    useEffect(() => {
      if (user) getAdditionalUserData(user);
    }, [getAdditionalUserData, user, currentEditing, userAvatar]);

    const capitalize = (string: string): string => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const { t } = useTranslation('PersonalInfoPage');

    const setAdditionalUserData = useCallback(() => {
      const { displayName, email, photoURL } = user;

      setUserData({
        displayName,
        email,
        gender: additionalUserData ? t(capitalize(additionalUserData.gender)) : '',
        birthday: additionalUserData ? additionalUserData.birthDate : '',
        photoURL,
      });
    }, [additionalUserData, t, user]);

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

    const handleAvatarChange = () => {
      const { photoURL } = user;
      setUserAvatar(photoURL);
    };

    return (
      <S.PersonalInfo>
        <EditAvatar user={user} photoURL={userData.photoURL} onChange={handleAvatarChange} />
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
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(PersonalInfo);
export { ConnectedComponent as PersonalInfo };
