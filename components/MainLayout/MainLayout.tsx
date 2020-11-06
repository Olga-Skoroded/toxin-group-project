import { useEffect } from 'react';
import { connect } from 'react-redux';

import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { preloadAuthData } from 'redux/Auth/redux/actions';

import { State, Props } from './MainLayout.types';

type StateProps = {
  displayName: string;
  wasFinishedAuthChecking: boolean;
};

const MainLayout: React.FC<Props> = ({
  children,
  displayName,
  wasFinishedAuthChecking,
  preloadAuth,
}: Props): JSX.Element => {
  useEffect(() => {
    preloadAuth();
  }, [preloadAuth]);

  return (
    <>
      <Header displayName={displayName} wasFinishedAuthChecking={wasFinishedAuthChecking} />
      {children}
      <Footer />
    </>
  );
};

const mapState = (state: State): StateProps => ({
  displayName: state.auth.displayName,
  wasFinishedAuthChecking: state.auth.wasFinishedAuthChecking,
});

const mapDispatch = {
  preloadAuth: preloadAuthData,
};

export default connect(mapState, mapDispatch)(MainLayout);
