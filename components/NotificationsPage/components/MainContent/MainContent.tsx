import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import { AdditionalUserInformation } from 'api/entities/types';
import { User } from 'api/Firebase/modules/Authentication/types';
import NavAccountSettings from 'components/NavAccountSettings/NavAccountSettings';
import { getAdditionalUserData as getAdditionalUserDataRequest } from 'redux/Profile/redux/actions';
import { AppState } from 'redux/store.types';

import Subscriptions from '../Subscriptions/Subscriptions';
import * as S from './MainContent.styles';

type StateProps = {
  user: User;
  additionalUserData: AdditionalUserInformation;
};

const mapState = (state: AppState): StateProps => ({
  user: state.auth.user,
  additionalUserData: state.profile.additionalUserData,
});

const mapDispatch = {
  startGetAdditionalUserData: getAdditionalUserDataRequest,
};

type Props = StateProps & typeof mapDispatch;

const MainContent = ({
  user,
  additionalUserData,
  startGetAdditionalUserData,
}: Props): JSX.Element => {
  const getAdditionalUserData = useCallback(
    (currentUser) => {
      startGetAdditionalUserData(currentUser);
    },
    [startGetAdditionalUserData],
  );

  useEffect(() => {
    getAdditionalUserData(user);
  }, [getAdditionalUserData, user]);

  return (
    <S.MainContent>
      <NavAccountSettings title="Уведомления" />
      <S.Title>Уведомления</S.Title>
      <Subscriptions
        user={user}
        receiveOffers={additionalUserData ? additionalUserData.receiveOffers : false}
      />
    </S.MainContent>
  );
};
export default connect(mapState, mapDispatch)(MainContent);
