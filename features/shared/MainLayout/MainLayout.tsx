import { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { Assistant } from 'features/Assistant/Assistant';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.model';
import { User } from 'services/api/Firebase/modules/Authentication';
import { Footer, Header } from 'shared/view/components';

import * as S from './MainLayout.styles';

type StateProps = {
  user: User;
  wasFinishedAuthChecking: boolean;
};

const mapState = (state: AppState): StateProps => ({
  user: state.auth.user,
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

const MainLayout = memo(({ children, user, wasFinishedAuthChecking, preloadAuth }: Props) => {
  useEffect(() => {
    preloadAuth();
  }, [preloadAuth]);

  return (
    <>
      <Header user={user} wasFinishedAuthChecking={wasFinishedAuthChecking} />
      <S.Container>{children}</S.Container>
      <Assistant />
      <Footer />
    </>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(MainLayout);
export { ConnectedComponent as MainLayout };
