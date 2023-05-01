import { FC, memo } from 'react';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { Collapse } from '@mui/material';
import { TransitionHistory } from '../../../../types/typedefs';

interface Props {
  history: TransitionHistory[];
  isOpen: boolean;
}

export const History: FC<Props> = memo((props) => {
  const { history, isOpen } = props;

  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              History
            </Typography>

            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell align="right">Total price ($)</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {history.map((historyRow) => (
                  <TableRow key={historyRow.date}>
                    <TableCell component="th" scope="row">
                      {historyRow.date}
                    </TableCell>

                    <TableCell>
                      {historyRow.customerId}
                    </TableCell>

                    <TableCell align="right">
                      {historyRow.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
});
