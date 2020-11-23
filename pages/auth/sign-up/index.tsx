import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { SignupPage } from 'modules/Auth';

const Signup = memo(() => {
  const { t } = useTranslation('RegistrationPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Registration')}</title>
        <meta name="description" content={t('Registration for booking rooms in our hotel')} />
        <meta
          name="keywords"
          content={t('hotel, room, registration, authorization, book, sign in')}
        />
      </Head>
      <SignupPage />
    </>
  );
});

export default Signup;
