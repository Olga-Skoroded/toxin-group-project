import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { NotificationsPage } from 'modules/Profile';

const Notifications = memo(() => {
  const { t } = useTranslation('NotificationsPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Notifications')}</title>
        <meta
          name="description"
          content={t('On this page you can configure the notifications you need')}
        />
        <meta name="keywords" content={t('hotel, room, account, notifications, information')} />
      </Head>
      <NotificationsPage />
    </>
  );
});

export default Notifications;
