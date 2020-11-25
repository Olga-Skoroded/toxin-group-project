import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './MainContent.styles';

const MainContent = memo(() => {
  const { t } = useTranslation('AboutUsPage');

  return (
    <S.MainContent>
      <S.Navigation>
        <S.Title>{`${t('How to find us')}:`}</S.Title>
        <S.Address>
          {t('Krasnoarmeyskaya Ulitsa, 147, Tomsk, Tomsk Oblast, Russia, 634045')}
        </S.Address>
        <S.Map
          title={t('How to find us')}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1311.009447173499!2d84.97548648589736!3d56.45318027941868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4326ecb6b5e2d3b9%3A0x9ff5cfd80175713b!2z0JrRgNCw0YHQvdC-0LDRgNC80LXQudGB0LrQsNGPINGD0LsuLCAxNDcsINCi0L7QvNGB0LosINCi0L7QvNGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjywgNjM0MDQ1!5e0!3m2!1sru!2sua!4v1606296979551!5m2!1sru!2sua"
          aria-hidden="false"
        />
      </S.Navigation>
    </S.MainContent>
  );
});

export { MainContent };
