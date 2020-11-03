import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainLayout from 'components/MainLayout/MainLayout';
import {
  requestToAuth,
  breakAuthProcess,
  preloadAuthData,
  requestToAuthWithGoogle,
} from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.types';

import MainContent from './components/MainContent';

type StateProps = {
  isAuthSuccess: boolean;
  isAuthProcessNow: boolean;
  wasFinishedAuthChecking: boolean;
  authStatusText: string;
};

const mapState = (state: AppState): StateProps => ({
  isAuthSuccess: state.auth.isAuthSuccess,
  isAuthProcessNow: state.auth.isAuthProcessNow,
  authStatusText: state.auth.authStatusText,
  wasFinishedAuthChecking: state.auth.wasFinishedAuthChecking,
});

const mapDispatch = {
  startAuthProcess: requestToAuth,
  stopAuthProcess: breakAuthProcess,
  checkAuthBeforePageLoaded: preloadAuthData,
  startGoogleAuthProcess: requestToAuthWithGoogle,
};

type Props = StateProps & typeof mapDispatch;

const AuthPage: React.FC<Props> = ({
  isAuthSuccess,
  isAuthProcessNow,
  authStatusText,
  wasFinishedAuthChecking,
  checkAuthBeforePageLoaded,
  startAuthProcess,
  startGoogleAuthProcess,
  stopAuthProcess,
}: Props): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    checkAuthBeforePageLoaded();
    if (isAuthSuccess) router.back();
  });

  const isAuthRequired: boolean = wasFinishedAuthChecking && !isAuthSuccess;

  return (
    isAuthRequired && (
      <MainLayout>
        <MainContent
          isAuthSuccess={isAuthSuccess}
          isAuthProcessNow={isAuthProcessNow}
          authStatusText={authStatusText}
          startAuthProcess={startAuthProcess}
          startGoogleAuthProcess={startGoogleAuthProcess}
          stopAuthProcess={stopAuthProcess}
        />
      </MainLayout>
    )
  );
};

export default connect(mapState, mapDispatch)(AuthPage);
