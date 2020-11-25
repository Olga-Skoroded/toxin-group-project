import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { AboutUsPage } from 'modules/AboutUsPage/AboutUsPage';

const AboutUs = memo(() => {
  const { t } = useTranslation('ForgotPasswordPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Restore Password')}</title>
        <meta name="description" content={t('Password recovery from your account')} />
        <meta
          name="keywords"
          content={t(
            'hotel, room, registration, authorization, password, forgot password, restore, reset',
          )}
        />
      </Head>
      <AboutUsPage />
    </>
  );
});

export default AboutUs;
