import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import Room from 'components/Room/Room';
import { BookedRoom } from 'services/api/entities/types';

import * as S from './RoomsList.style';

type Props = {
  rooms: BookedRoom[];
};

const RoomsList = memo(({ rooms }: Props) => {
  const { t } = useTranslation('SelectedRoomsPage');

  return (
    <S.Container>
      {rooms &&
        rooms.map(({ room, bookedData }, index) => {
          const { id } = room;
          const { from, to } = bookedData;

          return (
            <S.RoomWrapper key={Number(index)}>
              <Room {...room} number={id} />
              <S.Price>
                <S.PriceDescription>{`${t('Booking Date')}:`}</S.PriceDescription>
                <S.PriceDescription>
                  {from} - {to}
                </S.PriceDescription>
              </S.Price>
            </S.RoomWrapper>
          );
        })}
    </S.Container>
  );
});

export default RoomsList;
