import { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Preloader from 'components/Preloader/Preloader';
import Room from 'components/Room/Room';

import { Props as RoomProps } from '../Room/Room.types';
import * as S from './Rooms.styles';
import { Props } from './Rooms.types';

const DEFAULT_INCREMENT = 12;

const Rooms: React.FC<Props> = ({ rooms }: Props) => {
  const [visibleRooms, setVisibleRooms] = useState<RoomProps[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const getNewRooms = useCallback(async () => {
    setVisibleRooms((prevRooms) => {
      const updatedList = rooms.slice(0, prevRooms.length + DEFAULT_INCREMENT);
      if (prevRooms.length && rooms.length === updatedList.length) setHasMore(false);
      return updatedList;
    });
  }, [rooms]);

  useEffect(() => {
    getNewRooms();
  }, [getNewRooms, rooms]);

  return (
    <InfiniteScroll
      dataLength={visibleRooms.length}
      next={getNewRooms}
      hasMore={hasMore}
      loader={<Preloader />}
      scrollThreshold={0.6}
      style={{ overflow: 'initial' }}
    >
      <S.Rooms>
        <S.RoomsGrid>
          {visibleRooms.map((room) => (
            <S.RoomItem key={room.number}>
              <Room {...room} />
            </S.RoomItem>
          ))}
        </S.RoomsGrid>
      </S.Rooms>
    </InfiniteScroll>
  );
};

export default Rooms;
