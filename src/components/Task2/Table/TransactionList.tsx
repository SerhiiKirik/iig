import { useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';
import { Row } from './Row/TableRow';
import transactions from '../../../task2.json';
import { TransitionHistory } from '../../../types/typedefs';

export const TransactionList = () => {
  const { data } = transactions;

  const preparedData = useMemo(() => {
    const newObject: Record<string, {
      price: number,
      history: TransitionHistory[]
    }> = {};

    data.forEach((obj) => {
      const key = obj.currency;

      if (!newObject[key]) {
        newObject[key] = { price: obj.price, history: [...obj.history] };
      } else {
        newObject[key].price += obj.price;
        newObject[key].history.push(...obj.history);
      }
    });

    return Object.entries(newObject).map(([key, value]) => ({
      token: key,
      value: value.price,
      history: value.history,
    }));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Token</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {preparedData.map((row) => (
            <Row key={row.token} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
