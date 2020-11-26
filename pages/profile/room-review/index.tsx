import Head from 'next/head';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { RoomReviewPage } from 'modules/Profile/RoomReviewPage/RoomReviewPage';

const RoomReview: React.FC = memo(() => {
  const { t } = useTranslation('RoomReviewPage');

  return (
    <>
      <Head>
        <title>Toxin | {t('Room review')}</title>
        <meta
          name="description"
          content={t('Here is all the information about the room you have booked')}
        />
        <meta name="keywords" content={t('hotel, room, review, room review, rating room')} />
      </Head>
      <RoomReviewPage />
    </>
  );
});

export default RoomReview;
