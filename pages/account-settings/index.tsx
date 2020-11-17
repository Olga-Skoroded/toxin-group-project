import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import AccountSettingsPage from 'components/AccountSettingsPage/AccountSettingsPage';

const AccountSettings = memo(() => {
  const { t } = useTranslation('AccountSettingsPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Account Settings')}</title>
        <meta name="description" content={t('All available settings for your account')} />
        <meta name="keywords" content={t('hotel, room, account, customize')} />
      </Head>
      <AccountSettingsPage />
    </>
  );
});

export default AccountSettings;
