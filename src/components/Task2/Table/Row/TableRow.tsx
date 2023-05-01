import { FC, useState } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TransitionHistory } from '../../../../types/typedefs';
import { History } from './History';

interface CurrencyData {
  token: string;
  value: number;
  history: TransitionHistory[];
}

interface Props {
  row: CurrencyData;
}

export const Row: FC<Props> = (props) => {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.token}
        </TableCell>
        <TableCell align="right">{row.value}</TableCell>
      </TableRow>

      <History history={row.history} isOpen={open} />
    </>
  );
};
