import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { FoodOrderPage } from 'modules/Services/FoodOrderPage/FoodOrderPage';

const FoodOrder = memo(() => {
  const { t } = useTranslation('ServicesPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Links:Services')}</title>
        <meta name="description" content={t('Services that are available in our hotel')} />
        <meta name="keywords" content={t('hotel, services, transfer, food order')} />
      </Head>
      <FoodOrderPage />
    </>
  );
});

export default FoodOrder;
