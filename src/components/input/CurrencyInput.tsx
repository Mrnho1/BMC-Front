import React from 'react'
import NumberFormat from 'react-number-format/types/numeric_format';
import TextField from '@material-ui/core/TextField';

function CurrencyInput(props: { [x: string]: any; name?: any; value?: any; onChange?: any; }) {
    const { value, onChange, ...rest } = props;

    const handleValueChange = (values: { value: any; }) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      };

  return (
    <NumberFormat
      value={value}
      onValueChange={handleValueChange}
      thousandSeparator="."
      decimalSeparator=","
      prefix="R$ "
      isNumericString
      {...rest}
      customInput={TextField}
    />
  )
}

export default CurrencyInput