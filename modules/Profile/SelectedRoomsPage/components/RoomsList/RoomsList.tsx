import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BookedRoom } from 'services/api/entities/model';
import { Room } from 'shared/view/components';

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
              <Room {...room} number={id} bookedData={bookedData} />
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

export { RoomsList };
