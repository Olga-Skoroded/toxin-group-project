import { useRouter } from 'next/router';
import { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import { Filters } from 'api/entities/types';
import MainLayout from 'components/MainLayout/MainLayout';
import Preloader from 'components/Preloader/Preloader';
import { Props as RoomProps } from 'components/Room/Room.types';
import RoomFilter from 'components/RoomFilter/RoomFilter';
import Rooms from 'components/Rooms/Rooms';
import defaultFilters from 'components/SearchRoomForm/defaultFilters';
import { requestRooms } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.types';

import * as S from './SearchRoomPage.styles';
import { SortOrder, SortData, SortParam } from './SearchRoomPage.types';
import getPassedFilters from './utils/getPassedFilters';

type StateProps = {
  rooms: RoomProps[];
  isPending: boolean;
};

const mapState = (state: AppState): StateProps => ({
  rooms: state.booking.rooms,
  isPending: state.booking.isPending,
});

const mapDispatch = {
  getRooms: requestRooms,
};

type Props = StateProps & typeof mapDispatch;

const separator = ' ';

const sortData: SortData[] = [
  {
    parameter: 'price',
    name: 'цена',
    sortFunction: (a: RoomProps, b: RoomProps) => a.price - b.price,
  },
  {
    parameter: 'rating',
    name: 'рейтинг',
    sortFunction: (a: RoomProps, b: RoomProps) => a.rating - b.rating,
  },
  {
    parameter: 'reviews',
    name: 'количество отзывов',
    sortFunction: (a: RoomProps, b: RoomProps) => a.reviews.length - b.reviews.length,
  },
];
const [descKey, ascKey] = ['desc', 'asc'] as SortOrder[];

const SearchRoomPage: React.FC<Props> = ({ rooms, getRooms, isPending }: Props) => {
  const router = useRouter();

  const passedParams = getPassedFilters(router.asPath);

  const initialFilters: Filters = passedParams && {
    ...defaultFilters,
    ...passedParams,
  };

  const filters: Filters = initialFilters || defaultFilters;

  const loadRooms = (options?: Filters) => {
    const currentFilters = options ? { ...filters, ...options } : { ...filters };
    router.push(`/search-room?&values=${JSON.stringify(currentFilters)}`);
    getRooms(currentFilters);
  };

  const [sortParam, setSortParam] = useState<SortParam>('price');
  const [isAscendingSort, setIsAscendingSort] = useState(true);

  const ascSortedRooms = [...rooms].sort(
    sortData.find((obj) => obj.parameter === sortParam).sortFunction,
  );

  const handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    const [param, sortOrder] = target.value.split(separator) as [SortParam, SortOrder];
    setSortParam(param);
    setIsAscendingSort(sortOrder === ascKey);
  };

  const sortedRooms =
    rooms.length && (isAscendingSort ? [...ascSortedRooms] : [...ascSortedRooms.reverse()]);

  return (
    <MainLayout>
      <S.Container>
        <S.FilterContainer>
          <RoomFilter initialFilters={filters} loadRooms={loadRooms} isPending={isPending} />
        </S.FilterContainer>
        <S.RoomsContainer>
          <S.TitleContainer>
            <S.RoomsTitle>Номера, которые мы для вас подобрали</S.RoomsTitle>
            <S.Sort>
              Сортировать по параметру:
              <S.Select onChange={handleSelectChange}>
                {sortData.map((paramData) => (
                  <Fragment key={paramData.parameter}>
                    <option
                      value={`${paramData.parameter}${separator}${ascKey}`}
                      key={`${paramData.parameter}${separator}${ascKey}`}
                    >
                      {paramData.name} ↑
                    </option>
                    <option
                      value={`${paramData.parameter}${separator}${descKey}`}
                      key={`${paramData.parameter}${separator}${descKey}`}
                    >
                      {paramData.name} ↓
                    </option>
                  </Fragment>
                ))}
              </S.Select>
            </S.Sort>
          </S.TitleContainer>
          {isPending && (
            <S.PreloaderWrapper>
              <Preloader />
            </S.PreloaderWrapper>
          )}
          {rooms.length ? (
            <Rooms rooms={sortedRooms} />
          ) : (
            !isPending && <span>По вашему запросу не найдено результатов :(</span>
          )}
        </S.RoomsContainer>
      </S.Container>
    </MainLayout>
  );
};

export default connect(mapState, mapDispatch)(SearchRoomPage);
