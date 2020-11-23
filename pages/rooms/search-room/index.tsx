import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { SearchRoomPage } from 'modules/Rooms';

const SearchRoom = memo(() => {
  const { t } = useTranslation('SearchRoomPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Find a Room')}</title>
        <meta name="description" content={t('Select and book a room in our hotel')} />
        <meta name="keywords" content={t('hotel, room, booking, book')} />
      </Head>
      <SearchRoomPage />
    </>
  );
});

export default SearchRoom;
