import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { AppState } from 'redux/store.model';
import { getSubscriptionData as getSubscriptionDataRequest } from 'redux/Subscriptions/redux/actions';
import { SubscriptionData } from 'services/api/entities/model';
import { User } from 'services/api/Firebase/modules/Authentication/model';
import { NavAccountSettings } from 'shared/view/elements';

import { Subscriptions } from '../Subscriptions/Subscriptions';
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

const MainContent = memo(({ user, subscriptionData, loadSubscriptionData }: Props) => {
  const getSubscriptionData = useCallback(
    (currentUser) => {
      if (currentUser) loadSubscriptionData(currentUser.email);
    },
    [loadSubscriptionData],
  );

  useEffect(() => {
    getSubscriptionData(user);
  }, [getSubscriptionData, user]);

  const { t } = useTranslation('AccountSettingsPage');

  return (
    <S.MainContent>
      <NavAccountSettings title={t('Notifications')} />
      <S.Title>{t('Notifications')}</S.Title>
      <Subscriptions
        email={user ? user.email : null}
        hasSpecialOffers={subscriptionData ? subscriptionData.hasSpecialOffers : false}
      />
    </S.MainContent>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(MainContent);
export { ConnectedComponent as MainContent };
