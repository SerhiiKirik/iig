import { FC, memo } from 'react';
import { TextField } from '@mui/material';

interface Props {
  onChange: (value: any) => void;
  value: number;
}

export const Input: FC<Props> = memo((props) => {
  const { value, onChange } = props;

  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
});
