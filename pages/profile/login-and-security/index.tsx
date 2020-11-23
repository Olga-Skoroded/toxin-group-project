import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginAndSecurityPage } from 'modules/Profile';

const LoginAndSecurity = memo(() => {
  const { t } = useTranslation('LoginAndSecurityPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Security')}</title>
        <meta
          name="description"
          content={t('Here you can configure the protection settings for your account')}
        />
        <meta name="keywords" content={t('hotel, room, account, security, protection, password')} />
      </Head>
      <LoginAndSecurityPage />
    </>
  );
});

export default LoginAndSecurity;
