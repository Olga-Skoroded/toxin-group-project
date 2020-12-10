import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useEffect, useState, memo } from 'react';
import { connect } from 'react-redux';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';
import { requestRoomsWithoutFilters } from 'redux/Booking/redux/actions';
import { AppState } from 'redux/store.model';
import { RoomClasses } from 'services/api/entities/model';
import { RoomProps } from 'shared/view/components/Room/Room.model';
import { ArrowButton, Preloader } from 'shared/view/elements';

import * as S from './PriceListPage.styles';

type RowItemFilter = { class: Record<string, boolean>; price: { from: number; to: number } };

type RowItem = {
  roomType: string;
  minCost: number;
  maxCost: number;
  filter: RowItemFilter;
};

type HeadCell = {
  id: string;
  label: string;
};

type StateProps = {
  rooms: RoomProps[];
  isPending: boolean;
};

const getRowItem = (
  roomType: RoomClasses,
  minCost: number,
  maxCost: number,
  filter: RowItemFilter,
): RowItem => ({
  roomType,
  minCost,
  maxCost,
  filter,
});

const headCells: HeadCell[] = [
  { id: 'type', label: 'Тип номера' },
  { id: 'minCost', label: 'Минимальная цена' },
  { id: 'maxCost', label: 'Максимальная цена' },
  { id: 'filterParams', label: '' },
];

const mapState = (state: AppState): StateProps => ({
  rooms: state.booking.rooms,
  isPending: state.booking.isPending,
});

const mapDispatch = {
  getRooms: requestRoomsWithoutFilters,
};

type Props = ReturnType<typeof mapState> & typeof mapDispatch;

const getRowItemByRoomClass = (rooms, roomType: RoomClasses): RowItem => {
  const parsedRoomType = roomType.toLowerCase();
  const roomElements = rooms
    .filter((room) => room.class === parsedRoomType)
    .sort((prev, current) => prev.price - current.price);
  const minPrice: number = roomElements[0].price;
  const maxPrice: number = roomElements[roomElements.length - 1].price;
  const filter: RowItemFilter = {
    class: { [parsedRoomType]: true },
    price: { from: minPrice, to: maxPrice },
  };

  return getRowItem(roomType, minPrice, maxPrice, filter);
};

const PriceListPage = memo(({ rooms, isPending, getRooms }: Props) => {
  const [isPreparedData, setPreparedData] = useState(false);
  useEffect(() => {
    getRooms();

    setTimeout(() => {
      setPreparedData(true);
    });
  }, [getRooms]);

  const rows =
    isPreparedData && !isPending && rooms.length
      ? ['Economy', 'Luxury'].map((roomClass: RoomClasses) =>
          getRowItemByRoomClass(rooms, roomClass),
        )
      : [];

  return (
    <MainLayout>
      <S.Container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map((cell) => (
                  <TableCell key={cell.id}>{cell.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            {isPending && <Preloader />}
            <TableBody>
              {rows &&
                rows.map((row) => (
                  <TableRow key={row.roomType}>
                    <TableCell>{row.roomType}</TableCell>
                    <TableCell>{row.minCost}</TableCell>
                    <TableCell>{row.maxCost}</TableCell>
                    <TableCell>
                      <ArrowButton href={`/rooms/search-room?values=${JSON.stringify(row.filter)}`}>
                        Подобрать номер
                      </ArrowButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </S.Container>
    </MainLayout>
  );
});

const ConnectedComponent = connect(mapState, mapDispatch)(PriceListPage);

export { ConnectedComponent as PriceListPage };
