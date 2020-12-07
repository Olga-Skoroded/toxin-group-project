import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { memo } from 'react';

import { MainLayout } from 'features/shared/MainLayout/MainLayout';

import * as S from './PriceListPage.styles';

type AvailableRoomTypes = 'economy' | 'luxury';

type RowItem = {
  roomType: string;
  minCost: number;
  maxCost: number;
};

type HeadCell = {
  id: string;
  label: string;
};

const getRowItem = (roomType: AvailableRoomTypes, minCost: number, maxCost: number): RowItem => ({
  roomType,
  minCost,
  maxCost,
});

const rows = [getRowItem('economy', 0, 10000), getRowItem('luxury', 10000, 50000)];

const headCells: HeadCell[] = [
  { id: 'type', label: 'Тип номера' },
  { id: 'minCost', label: 'Минимальная цена' },
  { id: 'maxCost', label: 'Максимальная цена' },
  { id: 'filterParams', label: '' },
];

const PriceListPage = memo(() => {
  return (
    <MainLayout>
      <S.Container>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((cell) => (
                <TableCell key={cell.id}>{cell.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.roomType}>
                <TableCell>{row.roomType}</TableCell>
                <TableCell>{row.minCost}</TableCell>
                <TableCell>{row.maxCost}</TableCell>
                <TableCell>Подобрать номер</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </S.Container>
    </MainLayout>
  );
});

export { PriceListPage };
