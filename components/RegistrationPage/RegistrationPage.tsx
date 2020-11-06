import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import MainLayout from 'components/MainLayout/MainLayout';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { startRegistration, cancelRegistration } from 'redux/Registration/redux/actions';
import { AppState } from 'redux/store.types';

import MainContent from './components/MainContent/MainContent';

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
  requestRegistration: startRegistration,
  stopRegistration: cancelRegistration,
  checkAuthBeforePageLoaded: preloadAuthData,
};

export type PropsConnected = StateProps & typeof mapDispatch;

const RegistrationPage: React.FC<PropsConnected> = ({
  isSuccess,
  isProcess,
  statusText,
  wasFinishedAuthChecking,
  isAuthSuccess,
  requestRegistration,
  stopRegistration,
  checkAuthBeforePageLoaded,
}: PropsConnected): JSX.Element => {
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
};

export default connect(mapState, mapDispatch)(RegistrationPage);
