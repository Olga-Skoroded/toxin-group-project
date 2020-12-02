import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ServicesPage } from 'modules/Services';

const Services = memo(() => {
  const { t } = useTranslation('ServicesPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Links:Services')}</title>
        <meta name="description" content={t('Services that are available in our hotel')} />
        <meta name="keywords" content={t('hotel, services, transfer, food order')} />
      </Head>
      <ServicesPage />
    </>
  );
});

export default Services;
