import React from 'react'
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
import { TextFieldProps } from '@material-ui/core/TextField';

interface CurrencyTextFieldProps extends TextFieldProps {
    decimalScale?: number;
    fixedDecimalScale?: boolean;
    prefix?: string;
    suffix?: string;
  }

  export const CurrencyTextField: React.FC<CurrencyTextFieldProps> = ({
    decimalScale = 2,
    fixedDecimalScale = true,
    prefix = "",
    suffix = "",
    ...restProps
  }) => {
    return (
      <NumberFormat
        {...restProps}
        thousandSeparator={true}
        decimalSeparator=","
        prefix={prefix}
        suffix={suffix}
        decimalScale={decimalScale}
        fixedDecimalScale={fixedDecimalScale}
        allowNegative={false}
        isNumericString={true}
        customInput={TextField}
        InputProps={{ inputProps: { min: 0 } }}
      />
    );
  };