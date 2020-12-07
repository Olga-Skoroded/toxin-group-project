import { memo } from 'react';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { setRoomRating, finishRoomRating } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { ClientRoomProps } from 'shared/model';
import { Button } from 'shared/view/elements/Button/Button';
import { Preloader } from 'shared/view/elements/Preloader/Preloader';
import { StarRating } from 'shared/view/elements/StarRating/StarRating';

import * as S from './UserRating.styles';

const mapState = (state: AppState): StateProps => ({
  userEmail: state.auth.userEmail,
  isLoadingData: state.booking.isPending,
  isRatingProcess: state.booking.isRatingProcess,
  userRating: state.booking.userRating,
  currentRoom: state.booking.currentRoom,
  ratingStatus: state.booking.ratingStatus,
});

const mapDispatch = {
  setRating: setRoomRating,
  finishRatingProcess: finishRoomRating,
};

type StateProps = {
  userEmail: string;
  isLoadingData: boolean;
  currentRoom: ClientRoomProps;
  isRatingProcess: boolean;
  ratingStatus: string;
  userRating: number;
};

type OwnProps = {
  room: string;
};

type Props = typeof mapDispatch & ReturnType<typeof mapState> & OwnProps;

type FormData = {
  'room-rating': number;
};

const UserRating = memo(
  ({
    isLoadingData,
    currentRoom,
    isRatingProcess,
    ratingStatus,
    userRating,
    userEmail,
    room,
    setRating,
    finishRatingProcess,
  }: Props) => {
    const { t } = useTranslation(['RoomDetailsPage', 'Buttons']);

    const handleRatingSubmit = (values: FormData) => {
      setRating({ userEmail, roomId: Number(room), rating: values['room-rating'] });
      setTimeout(finishRatingProcess, 1500);
    };

    return (
      <Form
        onSubmit={handleRatingSubmit}
        render={({ handleSubmit }) => (
          <S.RatingWrapper onSubmit={handleSubmit}>
            {!isLoadingData && currentRoom ? (
              <>
                <S.Title>{t('Rate your room experience')}:</S.Title>
                {isRatingProcess && ratingStatus ? (
                  <>{ratingStatus}</>
                ) : (
                  <>
                    <S.StarRatingWrapper>
                      <StarRating rating={userRating || 0} disabled={false} name="room-rating" />
                    </S.StarRatingWrapper>
                    <Button type="submit">
                      {userRating ? t('Buttons:Change rating') : t('Buttons:Apply')}
                    </Button>
                  </>
                )}
              </>
            ) : (
              <Preloader label={t('Uploading your rating')} />
            )}
          </S.RatingWrapper>
        )}
      />
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(UserRating);

export { ConnectedComponent as UserRating };
