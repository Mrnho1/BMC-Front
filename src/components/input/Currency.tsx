import React from 'react';
import { createNumberMask } from 'text-mask-addons';
import { TextField } from '@material-ui/core';

interface CurrencyInputProps {
  value: number;
  onChange: (value: number) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ value, onChange }) => {
    const numberMask = createNumberMask({
      prefix: 'R$ ',
      suffix: '',
      thousandsSeparatorSymbol: '.',
      decimalSymbol: ',',
      allowDecimal: true,
      decimalLimit: 2,
      integerLimit: 10,
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = event.target.value.replace(/[^0-9]/g, '');
      const floatValue = parseFloat(rawValue) / 100;
      onChange(floatValue);
    };
  
    return (
      <TextField
        label="Valor"
        value={value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        onChange={handleChange}
        InputProps={{
          inputComponent: InputMask,
          inputProps: { mask: numberMask },
        }}
      />
    );
  };
  
  const InputMask: React.FC<{ inputRef: (ref: HTMLInputElement | null) => void; mask: any }> = ({
    inputRef,
    mask,
    ...rest
  }) => {
    return (
      <input
        {...rest}
        ref={(ref) => {
          inputRef(ref);
        }}
        style={{ border: 'none' }}
        // Note que inputMode não é suportado por alguns navegadores, o que pode causar problemas.
        inputMode="numeric"
      />
    );
  };
  
  export default CurrencyInput;