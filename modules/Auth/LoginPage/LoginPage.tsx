import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { AccountEntry } from 'features/Auth/AccountEntry/AccountEntry';
import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import {
  requestToAuth,
  breakAuthProcess,
  preloadAuthData,
  requestToAuthWithGoogle,
} from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.model';

import * as S from './LoginPage.styles';

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
export type Props = StateProps & typeof mapDispatch;

const LoginPage = memo(
  ({
    isAuthSuccess,
    isAuthProcessNow,
    authStatusText,
    wasFinishedAuthChecking,
    checkAuthBeforePageLoaded,
    startAuthProcess,
    startGoogleAuthProcess,
    stopAuthProcess,
  }: Props) => {
    const router = useRouter();

    useEffect(() => {
      checkAuthBeforePageLoaded();
      if (isAuthSuccess) {
        document.referrer ? router.back() : router.push('/');
      }
    });

    const isAuthRequired: boolean = wasFinishedAuthChecking && !isAuthSuccess;
    return (
      isAuthRequired && (
        <MainLayout>
          <S.Container>
            <AccountEntry
              isAuthSuccess={isAuthSuccess}
              isAuthProcessNow={isAuthProcessNow}
              authStatusText={authStatusText}
              requestToAuth={startAuthProcess}
              requestToAuthWithGoogle={startGoogleAuthProcess}
              breakAuthProcess={stopAuthProcess}
            />
          </S.Container>
        </MainLayout>
      )
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(LoginPage);
export { ConnectedComponent as LoginPage };
