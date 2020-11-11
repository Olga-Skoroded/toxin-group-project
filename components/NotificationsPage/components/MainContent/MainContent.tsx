import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';

import NavAccountSettings from 'components/NavAccountSettings/NavAccountSettings';
import { AppState } from 'redux/store.model';
import { getSubscriptionData as getSubscriptionDataRequest } from 'redux/Subscriptions/redux/actions';
import { SubscriptionData } from 'services/api/entities/types';
import { User } from 'services/api/Firebase/modules/Authentication/types';

import Subscriptions from '../Subscriptions/Subscriptions';
import * as S from './MainContent.styles';

type StateProps = {
  user: User;
  subscriptionData: SubscriptionData;
};

const mapState = (state: AppState): StateProps => ({
  user: state.auth.user,
  subscriptionData: state.subscriptions.subscriptionData,
});

const mapDispatch = {
  loadSubscriptionData: getSubscriptionDataRequest,
};

type Props = StateProps & typeof mapDispatch;

const MainContent = ({ user, subscriptionData, loadSubscriptionData }: Props): JSX.Element => {
  const getSubscriptionData = useCallback(
    (currentUser) => {
      if (currentUser) loadSubscriptionData(currentUser.email);
    },
    [loadSubscriptionData],
  );

  useEffect(() => {
    getSubscriptionData(user);
  }, [getSubscriptionData, user]);

  return (
    <S.MainContent>
      <NavAccountSettings title="Уведомления" />
      <S.Title>Уведомления</S.Title>
      <Subscriptions
        email={user ? user.email : null}
        hashasSpecialOffers={subscriptionData ? subscriptionData.hasSpecialOffers : false}
      />
    </S.MainContent>
  );
};
export default connect(mapState, mapDispatch)(MainContent);
