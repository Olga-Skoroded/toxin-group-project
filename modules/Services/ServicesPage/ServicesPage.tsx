import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import { Card } from 'shared/view/elements/Card/Card';

import { cardsData } from './ServicesPage.fixture';
import * as S from './ServicesPage.styles';

const ServicesPage = memo(() => {
  const { t } = useTranslation('ServicesPage');

  return (
    <MainLayout>
      <S.Container>
        <S.Title>{t('Links:Services')}</S.Title>
        <S.Cards>
          {cardsData.map(({ title, description, href }) => (
            <S.Item key={title}>
              <Card title={t(`Links:${title}`)} description={t(description)} href={href} />
            </S.Item>
          ))}
        </S.Cards>
      </S.Container>
    </MainLayout>
  );
});

export { ServicesPage };
