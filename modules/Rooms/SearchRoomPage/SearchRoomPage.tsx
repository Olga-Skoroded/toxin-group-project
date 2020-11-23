import { useRouter } from 'next/router';
import { useState, Fragment, FormEvent, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { RoomFilter } from 'features/Rooms/RoomFilter/RoomFilter';
import { defaultFilters } from 'features/Rooms/SearchRoomForm/SearchRoomForm.fixture';
import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import { requestRooms } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { Filters } from 'services/api/entities/model';
import { Rooms } from 'shared/view/components';
import { RoomProps } from 'shared/view/components/Room/Room.model';
import { Preloader } from 'shared/view/elements';

import { SortOrder, SortData, SortParam } from './SearchRoomPage.model';
import * as S from './SearchRoomPage.styles';
import { getPassedFilters } from './utils/getPassedFilters';

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

const SearchRoomPage = memo(({ rooms, getRooms, isPending }: Props) => {
  const router = useRouter();

  const passedParams = getPassedFilters(router.asPath);

  const initialFilters: Filters = passedParams && {
    ...defaultFilters,
    ...passedParams,
  };

  const filters: Filters = initialFilters || defaultFilters;

  const loadRooms = (options?: Filters) => {
    const currentFilters = options ? { ...filters, ...options } : { ...filters };
    router.push(`/rooms/search-room?&values=${JSON.stringify(currentFilters)}`);
    getRooms(currentFilters);
  };

  const { t } = useTranslation('SearchRoomPage');

  const separator = ' ';

  const sortData: SortData[] = [
    {
      parameter: 'price',
      name: t('price'),
      sortFunction: (a: RoomProps, b: RoomProps) => a.price - b.price,
    },
    {
      parameter: 'rating',
      name: t('rating'),
      sortFunction: (a: RoomProps, b: RoomProps) => a.rating - b.rating,
    },
    {
      parameter: 'reviews',
      name: t('number of reviews'),
      sortFunction: (a: RoomProps, b: RoomProps) => a.reviews.length - b.reviews.length,
    },
  ];
  const [descKey, ascKey] = ['desc', 'asc'] as SortOrder[];

  const [sortParam, setSortParam] = useState<SortParam>('price');
  const [isAscendingSort, setIsAscendingSort] = useState(true);

  const ascSortedRooms = [...rooms].sort(
    sortData.find((obj) => obj.parameter === sortParam).sortFunction,
  );

  const handleSelectChange = (e: FormEvent<HTMLSelectElement>) => {
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
            <S.RoomsTitle>{t('The rooms we have selected for you')}</S.RoomsTitle>
            <S.Sort>
              {t('Sort by parameter')}:
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
            !isPending && <span>{t('No results were found for your request =(')}</span>
          )}
        </S.RoomsContainer>
      </S.Container>
    </MainLayout>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(SearchRoomPage);
export { ConnectedComponent as SearchRoomPage };
