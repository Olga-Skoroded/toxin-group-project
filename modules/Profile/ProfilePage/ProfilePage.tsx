import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import { preloadAuthData } from 'redux/Auth/redux/actions';
import { AppState } from 'redux/store.model';
import { Card } from 'shared/view/elements/Card/Card';

import { cardsData } from './ProfilePage.fixture';
import * as S from './ProfilePage.styles';

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

const ProfilePage = memo(({ isAuthSuccess, checkAuthBeforePageLoaded }: Props) => {
  const router = useRouter();

  useEffect(() => {
    checkAuthBeforePageLoaded();

    if (typeof isAuthSuccess === 'boolean') {
      if (!isAuthSuccess) router.push('/');
    }
  });

  const { t } = useTranslation('AccountSettingsPage');

  return (
    <MainLayout>
      <S.Container>
        <S.Title>{t('Account')}</S.Title>
        <S.Cards>
          {cardsData.map(({ title, description, href }) => (
            <S.Item key={title}>
              <Card title={t(title)} description={t(description)} href={href} />
            </S.Item>
          ))}
        </S.Cards>
      </S.Container>
    </MainLayout>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(ProfilePage);
export { ConnectedComponent as ProfilePage };
