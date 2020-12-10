import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PriceListPage } from 'modules/Rooms';

const RoomDetails = memo(() => {
  const { t } = useTranslation('PriceListPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Price list')}</title>
        <meta
          name="description"
          content={t('On this page you can find out the pricing policy of our hotel')}
        />
        <meta name="keywords" content={t('hotel, room, booking, price, price list, information')} />
      </Head>
      <PriceListPage />
    </>
  );
});

export default RoomDetails;
