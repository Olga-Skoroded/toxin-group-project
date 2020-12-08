import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BookedRoom } from 'services/api/entities/model';
import { Room } from 'shared/view/components';

import * as S from './RoomsList.style';

type Props = {
  rooms: BookedRoom[];
};

const RoomsList = memo(({ rooms }: Props) => {
  const { t, i18n } = useTranslation('SelectedRoomsPage');

  const formatter = Intl.DateTimeFormat(i18n.language);

  return (
    <S.Container>
      {rooms &&
        rooms.map(({ room, bookedData }) => {
          const { id } = room;
          const { from, to } = bookedData;

          return (
            <S.RoomWrapper key={id}>
              <Room {...room} number={id} bookedData={bookedData} />
              <S.Price>
                <S.PriceDescription>{t('Booking Date')}:</S.PriceDescription>
                <S.PriceDescription>
                  {formatter.format(from)} - {formatter.format(to)}
                </S.PriceDescription>
              </S.Price>
            </S.RoomWrapper>
          );
        })}
    </S.Container>
  );
});

export { RoomsList };
