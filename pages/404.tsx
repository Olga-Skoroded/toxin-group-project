import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ErrorPage } from 'modules/ErrorPage/ErrorPage';

const CustomErrorPage = memo(() => {
  const { t } = useTranslation('ErrorPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Page not found')}</title>
        <meta name="description" content={t('Page not found')} />
        <meta name="keywords" content={t('hotel, room, error, not found')} />
      </Head>
      <ErrorPage />
    </>
  );
});

export default CustomErrorPage;
