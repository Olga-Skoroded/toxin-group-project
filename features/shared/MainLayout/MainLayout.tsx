import { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { preloadAuthData } from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.model';
import { Footer, Header } from 'shared/view/components';

type StateProps = {
  displayName: string;
  wasFinishedAuthChecking: boolean;
};

const mapState = (state: AppState): StateProps => ({
  displayName: state.auth.displayName,
  wasFinishedAuthChecking: state.auth.wasFinishedAuthChecking,
});

const mapDispatch = {
  preloadAuth: preloadAuthData,
};

type OwnProps = {
  children?: JSX.Element;
  authStatusText: string;
  isAuthSuccess: boolean;
};

type Props = OwnProps & StateProps & typeof mapDispatch;

const MainLayout = memo(
  ({ children, displayName, wasFinishedAuthChecking, preloadAuth }: Props) => {
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
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(MainLayout);
export { ConnectedComponent as MainLayout };
