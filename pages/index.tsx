import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { IndexPage } from 'modules/IndexPage/IndexPage';

const Index = memo(() => {
  const { t } = useTranslation('IndexPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Home')}</title>
        <meta name="description" content={t('Select and book a room in our hotel')} />
        <meta name="keywords" content={t('hotel, room, booking, book')} />
      </Head>
      <IndexPage />
    </>
  );
});

export default Index;
