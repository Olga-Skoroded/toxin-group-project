import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { FoodOrderPage } from 'modules/Services/FoodOrderPage/FoodOrderPage';

const FoodOrder = memo(() => {
  const { t } = useTranslation('FoodOrderPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Links:Food Order')}</title>
        <meta name="description" content={t('Room service')} />
        <meta name="keywords" content={t('hotel, services, food order')} />
      </Head>
      <FoodOrderPage />
    </>
  );
});

export default FoodOrder;
