import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { preloadAuthData } from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.model';

import { FoodOrderForm } from '../FoodOrderForm/FoodOrderForm';
import * as S from './MainContent.styles';

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

const MainContent = memo(({ isAuthSuccess, checkAuthBeforePageLoaded }: Props) => {
  const router = useRouter();

  useEffect(() => {
    checkAuthBeforePageLoaded();

    if (typeof isAuthSuccess === 'boolean') {
      if (!isAuthSuccess) router.push('/auth/login');
    }
  });

  return (
    <S.MainContent>
      <FoodOrderForm />
    </S.MainContent>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(MainContent);
export { ConnectedComponent as MainContent };
