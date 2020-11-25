import { useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './MainContent.styles';

const MainContent = memo(() => {
  const { t } = useTranslation('AboutUsPage');

  useEffect(() => {
    const script = document.createElement('script');

    script.src = '//yastatic.net/taxi-widget/ya-taxi-widget.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

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
        <S.TaxiContainer>
          <S.TaxiTitle>{t('Transfer')}</S.TaxiTitle>
          {t('You will get a discount if you get a taxi via the following widgets')}
          <S.TaxiList>
            <S.TaxiOption>
              <S.Taxi>{t('Taxi to the hotel')}</S.Taxi>
              <div
                className="ya-taxi-widget"
                data-use-location="true"
                data-app="3"
                data-redirect="1178268795219780156"
                data-tariff="econom"
                data-lang="ru"
                data-size="m"
                data-title="&#128661;"
                data-point-a=""
                data-point-b="84.97564,56.45315"
                data-ref="https%3A%2F%2Ffsd-toxin.netlify.app%2F"
                data-theme="normal"
                data-proxy-url="https://{app}.redirect.appmetrica.yandex.com/route?start-lat={start-lat}&amp;start-lon={start-lon}&amp;end-lat={end-lat}&amp;end-lon={end-lon}&amp;ref={ref}&amp;appmetrica_tracking_id={redirect}&amp;tariffClass={tariff}&amp;lang={lang}"
              />
            </S.TaxiOption>
            <S.TaxiOption>
              <S.Taxi>{t('Taxi to the airport')}</S.Taxi>
              <div
                className="ya-taxi-widget"
                data-use-location="true"
                data-app="3"
                data-redirect="1178268795219780156"
                data-tariff="econom"
                data-lang="ru"
                data-size="m"
                data-title="&#128661;"
                data-point-a=""
                data-point-b="85.209517,56.388412"
                data-ref="https%3A%2F%2Ffsd-toxin.netlify.app%2F"
                data-theme="normal"
                data-proxy-url="https://{app}.redirect.appmetrica.yandex.com/route?start-lat={start-lat}&amp;start-lon={start-lon}&amp;end-lat={end-lat}&amp;end-lon={end-lon}&amp;ref={ref}&amp;appmetrica_tracking_id={redirect}&amp;tariffClass={tariff}&amp;lang={lang}"
              />
            </S.TaxiOption>
          </S.TaxiList>
        </S.TaxiContainer>
      </S.Navigation>
    </S.MainContent>
  );
});

export { MainContent };
