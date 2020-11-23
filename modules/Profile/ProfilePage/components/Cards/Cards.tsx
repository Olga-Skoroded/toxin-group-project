import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { cardsData } from './Cards.fixture';
import * as S from './Cards.styles';

const Cards = memo(() => {
  const { t } = useTranslation('AccountSettingsPage');

  return (
    <S.Cards>
      {cardsData.map(({ title, description, href }) => (
        <S.Item key={title}>
          <Link href={href} passHref>
            <S.Card>
              <S.Title>{t(title)}</S.Title>
              <S.Description>{t(description)}</S.Description>
            </S.Card>
          </Link>
        </S.Item>
      ))}
    </S.Cards>
  );
});

export { Cards };
