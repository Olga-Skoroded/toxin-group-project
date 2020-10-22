import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import EditPersonalInfo from '../EditPersonalInfo/EditPersonalInfo';
import { data } from './PersonalInfo.data';
import * as S from './PersonalInfo.styles';

type Props = {
  user: firebase.User;
};

type State = {
  authReducer: Props;
};

const PersonalInfo = ({ user }: Props): JSX.Element => {
  const [userData, setUserData] = useState({ userName: '', email: '' });

  useEffect(() => {
    if (user) {
      const { displayName, email } = user;

      setUserData({ userName: displayName, email });
    }
  }, [user]);

  const accountData = data.map((elem) => {
    return { ...elem, value: userData[elem.component] };
  });

  return (
    <S.PersonalInfo>
      {accountData.map((elem) => (
        <S.Item key={elem.title}>
          <EditPersonalInfo user={user} {...elem} />
        </S.Item>
      ))}
    </S.PersonalInfo>
  );
};

const mapState = (state: State) => ({
  user: state.authReducer.user,
});

export default connect(mapState)(PersonalInfo);