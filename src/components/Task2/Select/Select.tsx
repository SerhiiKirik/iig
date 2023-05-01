import { FC, memo } from 'react';
import { MenuItem, TextField } from '@mui/material';
import { CurrenciesEnum } from '../../../types/typedefs';

interface Props {
  defaultValue?: CurrenciesEnum;
  selectValue: CurrenciesEnum;
  onSelect: (value: CurrenciesEnum) => void;
  onChange: (value: string) => void;
  value: string;
  disabled?: boolean;
}

const currencies = [{
  value: CurrenciesEnum.USDT,
}, {
  value: CurrenciesEnum.BTC,
}, {
  value: CurrenciesEnum.ETH,
}];

export const Select: FC<Props> = memo((props) => {
  const {
    value,
    defaultValue,
    onChange,
    onSelect,
    selectValue,
    disabled,
  } = props;

  return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue={defaultValue || CurrenciesEnum.USDT}
        value={selectValue}
        onChange={(event) => {
          onSelect(event.target.value as CurrenciesEnum);
        }}
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        disabled={disabled}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
});
