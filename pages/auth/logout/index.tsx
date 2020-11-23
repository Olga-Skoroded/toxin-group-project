import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { LogoutPage } from 'modules/Auth';

const Logout = memo(() => {
  const { t } = useTranslation('LogoutPage');
  return (
    <>
      <Head>
        <title>Toxin | {t('Sign Out')}</title>
        <meta name="description" content="Sign out of your account" />
        <meta
          name="keywords"
          content={t('hotel, room, registration, authorization, book, sign out')}
        />
      </Head>
      <LogoutPage />
    </>
  );
});

export default Logout;
