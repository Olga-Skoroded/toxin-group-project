import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { MenuPage } from 'modules/Services/MenuPage/MenuPage';

const Menu = memo(() => {
  const { t } = useTranslation('MenuPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Menu')}</title>
        <meta name="description" content={t('Restaurant menu')} />
        <meta name="keywords" content={t('hotel, services, menu, restaurant')} />
      </Head>
      <MenuPage />
    </>
  );
});

export default Menu;
