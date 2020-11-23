import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { SelectedRoomsPage } from 'modules/Profile';

const SelectedRooms = memo(() => {
  const { t } = useTranslation('SelectedRoomsPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Booked Rooms')}</title>
        <meta
          name="description"
          content={t('Here you can find information about your previously booked rooms')}
        />
        <meta
          name="keywords"
          content={t('hotel, room, booking, book, information, booking, history, past')}
        />
      </Head>
      <SelectedRoomsPage />
    </>
  );
});

export default SelectedRooms;
