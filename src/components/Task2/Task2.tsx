import { useState } from 'react';
import Box from '@mui/material/Box';
import { TransactionList } from './Table/TransactionList';
import { Select } from './Select/Select';
import { CurrenciesEnum } from '../../types/typedefs';
import transitions from '../../task2.json';

export const Task2 = () => {
  const { currencies } = transitions;

  const [firstSelect, setFirstSelect] = useState(CurrenciesEnum.USDT);
  const [firstValue, setValueSelect] = useState('');
  const [secondSelect, setSecondSelect] = useState(CurrenciesEnum.BTC);
  const [secondValue, setSecondValue] = useState('');

  const handleChange = (value: string) => {
    setValueSelect(value);

    const key = `${firstSelect}-${secondSelect}`;
    const obj: Record<string, number> = currencies;

    const newValue = obj[key] || 0;

    setSecondValue(() => String(newValue * Number(value)));
  };

  const handleSelect = (
    value: CurrenciesEnum,
    setSelect: (type: CurrenciesEnum) => void,
  ): void => {
    setSelect(value);

    const key = `${firstSelect}-${secondSelect}`;
    const obj: Record<string, number> = currencies;

    const newValue = obj[key] || 0;

    setSecondValue(() => String(newValue * Number(firstValue)));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Select
          onSelect={(value) => handleSelect(value, setFirstSelect)}
          selectValue={firstSelect}
          value={firstValue}
          onChange={handleChange}
        />

        <Select
          selectValue={secondSelect}
          onSelect={(value) => handleSelect(value, setSecondSelect)}
          value={secondValue}
          onChange={handleChange}
          disabled
        />
      </Box>

      <TransactionList transitions={transitions.data} />
    </>
  );
};
