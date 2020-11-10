import { BookedRoom } from 'api/entities/types';
import Room from 'components/Room/Room';

import * as S from './RoomsList.style';

type Props = {
  rooms: BookedRoom[];
  isForReviews?: boolean;
};

const RoomsList: React.FC<Props> = ({ rooms, isForReviews = false }: Props): JSX.Element => {
  return (
    <S.Container>
      {rooms &&
        rooms.map(({ room, bookedData }, index) => {
          const { id } = room;
          const { from, to } = bookedData;

          return (
            <S.RoomWrapper key={Number(index)}>
              <Room {...room} number={id} isForReviews={isForReviews} />
              <S.Price>
                <S.PriceDescription>Дата бронирования: </S.PriceDescription>
                <S.PriceDescription>
                  {from} - {to}
                </S.PriceDescription>
              </S.Price>
            </S.RoomWrapper>
          );
        })}
    </S.Container>
  );
};

export default RoomsList;
