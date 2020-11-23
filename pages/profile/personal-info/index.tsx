import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { PersonalInfoPage } from 'modules/Profile';

const PersonalInfo = memo(() => {
  const { t } = useTranslation('PersonalInfoPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Personal Information')}</title>
        <meta
          name="description"
          content={t('All information about you that is in our system is collected here')}
        />
        <meta name="keywords" content={t('hotel, room, account, info, information')} />
      </Head>
      <PersonalInfoPage />
    </>
  );
});

export default PersonalInfo;
