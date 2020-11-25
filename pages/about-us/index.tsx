import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AboutUsPage } from 'modules/AboutUsPage/AboutUsPage';

const AboutUs = memo(() => {
  const { t } = useTranslation('AboutUsPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('About Us')}</title>
        <meta name="description" content={t('Here you will find information about us')} />
        <meta name="keywords" content={t('hotel, room, about us, address, map')} />
      </Head>
      <AboutUsPage />
    </>
  );
});

export default AboutUs;
