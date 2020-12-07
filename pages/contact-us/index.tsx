import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ContactUsPage } from 'modules/ContactUsPage/ContactUsPage';

const ContactUs = memo(() => {
  const { t } = useTranslation('ContactUsPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Links:Contact Us')}</title>
        <meta name="description" content={t('Ask us questions about booking')} />
        <meta name="keywords" content={t('hotel, room, contact us, booking')} />
      </Head>
      <ContactUsPage />
    </>
  );
});

export default ContactUs;
