import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { RoomDetailsPage } from 'modules/Rooms';

const RoomDetails = memo(() => {
  const { t } = useTranslation('RoomDetailsPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Room Details')}</title>
        <meta
          name="description"
          content={t(
            'More detailed information about the room: rules, number of guests, amenities and much more',
          )}
        />
        <meta name="keywords" content={t('hotel, room, booking, book, information')} />
      </Head>
      <RoomDetailsPage />
    </>
  );
});

export default RoomDetails;
