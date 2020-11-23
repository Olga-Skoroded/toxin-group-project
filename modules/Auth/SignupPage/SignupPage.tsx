import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { registration, cancelRegistration } from 'redux/Registration/redux/actions';
import { AppState } from 'redux/store.model';

import { MainContent } from './components/MainContent/MainContent';

type StateProps = {
  isSuccess: boolean;
  isProcess: boolean;
  statusText: string;
  isAuthSuccess: boolean;
  wasFinishedAuthChecking: boolean;
};

const mapState = (state: AppState): StateProps => ({
  isSuccess: state.registration.isSuccess,
  isProcess: state.registration.isProcess,
  statusText: state.registration.statusText,
  wasFinishedAuthChecking: state.auth.wasFinishedAuthChecking,
  isAuthSuccess: state.auth.isAuthSuccess,
});

const mapDispatch = {
  requestRegistration: registration,
  stopRegistration: cancelRegistration,
  checkAuthBeforePageLoaded: preloadAuthData,
};

export type PropsConnected = StateProps & typeof mapDispatch;

const SignupPage = memo(
  ({
    isSuccess,
    isProcess,
    statusText,
    wasFinishedAuthChecking,
    isAuthSuccess,
    requestRegistration,
    stopRegistration,
    checkAuthBeforePageLoaded,
  }: PropsConnected) => {
    const router = useRouter();

    useEffect(() => {
      checkAuthBeforePageLoaded();
      if (isAuthSuccess) {
        document.referrer ? router.back() : router.push('/auth/login');
      }
    });

    const isAuthRequired: boolean = wasFinishedAuthChecking && !isAuthSuccess;

    return (
      isAuthRequired && (
        <MainLayout>
          <MainContent
            isSuccess={isSuccess}
            isProcess={isProcess}
            statusText={statusText}
            requestRegistration={requestRegistration}
            stopRegistration={stopRegistration}
          />
        </MainLayout>
      )
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(SignupPage);
export { ConnectedComponent as SignupPage };
