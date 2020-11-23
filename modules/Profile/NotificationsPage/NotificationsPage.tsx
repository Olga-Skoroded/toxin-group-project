import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.model';

import { MainContent } from './components/MainContent/MainContent';

type StateProps = {
  isAuthSuccess: boolean;
};

const mapState = (state: AppState): StateProps => ({
  isAuthSuccess: state.auth.isAuthSuccess,
});

const mapDispatch = {
  checkAuthBeforePageLoaded: preloadAuthData,
};

type Props = StateProps & typeof mapDispatch;

const NotificationsPage = memo(({ isAuthSuccess, checkAuthBeforePageLoaded }: Props) => {
  const router = useRouter();

  useEffect(() => {
    checkAuthBeforePageLoaded();

    if (typeof isAuthSuccess === 'boolean') {
      if (!isAuthSuccess) router.push('/');
    }
  });

  return (
    <MainLayout>
      <MainContent />
    </MainLayout>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(NotificationsPage);
export { ConnectedComponent as NotificationsPage };
