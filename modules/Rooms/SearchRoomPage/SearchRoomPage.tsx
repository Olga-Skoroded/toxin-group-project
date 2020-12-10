import { useRouter } from 'next/router';
import { Fragment, FormEvent, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { RoomFilter } from 'features/Rooms/RoomFilter/RoomFilter';
import { defaultFilters } from 'features/Rooms/SearchRoomForm/SearchRoomForm.fixture';
import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import { SortOrder, SortParam } from 'redux/Booking/model';
import { requestRooms, sortRooms as sortRoomsRequest } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { Filters } from 'services/api/entities/model';
import { Rooms } from 'shared/view/components';
import { RoomProps } from 'shared/view/components/Room/Room.model';
import { Preloader } from 'shared/view/elements';

import * as S from './SearchRoomPage.styles';
import { getPassedFilters } from './utils/getPassedFilters';

type StateProps = {
  isPending: boolean;
  sortOrder: SortOrder;
  sortParam: SortParam;
  sortedRooms: RoomProps[];
};

const mapState = (state: AppState): StateProps => ({
  isPending: state.booking.isPending,
  sortOrder: state.booking.sortOrder,
  sortParam: state.booking.sortParam,
  sortedRooms: state.booking.sortedRooms,
});

const mapDispatch = {
  getRooms: requestRooms,
  sortRooms: sortRoomsRequest,
};

type Props = StateProps & typeof mapDispatch;

type SortData = {
  parameter: SortParam;
  name: string;
};

const SearchRoomPage = memo(
  ({ isPending, sortOrder, sortParam, sortedRooms, getRooms, sortRooms }: Props) => {
    const router = useRouter();

    const passedParams = getPassedFilters(router.asPath);

    const initialFilters = passedParams && {
      ...defaultFilters,
      ...passedParams,
    };

    const filters = initialFilters || defaultFilters;

    const loadRooms = (options?: Filters) => {
      const currentFilters = options ? { ...filters, ...options } : { ...filters };
      router.push(`/rooms/search-room?&values=${JSON.stringify(currentFilters)}`);
      getRooms(currentFilters);
    };

    const { t } = useTranslation('SearchRoomPage');

    const separator = '-';

    const sortData: SortData[] = [
      {
        parameter: 'price',
        name: t('price'),
      },
      {
        parameter: 'rating',
        name: t('rating'),
      },
      {
        parameter: 'reviews',
        name: t('number of reviews'),
      },
    ];

    useEffect(() => {
      if (!isPending) sortRooms({ order: sortOrder, param: sortParam });
    }, [isPending, sortOrder, sortParam, sortRooms]);

    const handleSelectChange = (e: FormEvent<HTMLSelectElement>) => {
      const target = e.target as HTMLSelectElement;
      const [param, order] = target.value.split(separator) as [SortParam, SortOrder];
      sortRooms({ order, param });
    };

    return (
      <MainLayout>
        <S.Container>
          <S.FilterContainer>
            <RoomFilter initialFilters={filters} loadRooms={loadRooms} isPending={isPending} />
          </S.FilterContainer>
          <S.RoomsContainer>
            {isPending && (
              <S.PreloaderWrapper>
                <Preloader />
              </S.PreloaderWrapper>
            )}
            {sortedRooms.length ? (
              <>
                <S.TitleContainer>
                  <S.RoomsTitle>{t('The rooms we have selected for you')}</S.RoomsTitle>
                  <S.Sort>
                    {t('Sort by parameter')}:
                    <S.Select
                      onChange={handleSelectChange}
                      value={`${sortParam}${separator}${sortOrder}`}
                    >
                      {sortData.map(({ parameter, name }) => (
                        <Fragment key={parameter}>
                          <option value={`${parameter}${separator}asc`}>{name} ↑</option>
                          <option value={`${parameter}${separator}desc`}>{name} ↓</option>
                        </Fragment>
                      ))}
                    </S.Select>
                  </S.Sort>
                </S.TitleContainer>
                <Rooms rooms={sortedRooms} />
              </>
            ) : (
              !isPending && (
                <S.NothingFound>
                  {t(
                    'Unfortunately, no rooms were found for your request. Try changing your search criteria',
                  )}
                </S.NothingFound>
              )
            )}
          </S.RoomsContainer>
        </S.Container>
      </MainLayout>
    );
  },
);

const ConnectedComponent = connect(mapState, mapDispatch)(SearchRoomPage);
export { ConnectedComponent as SearchRoomPage };
