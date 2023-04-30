// import React, { useState } from 'react'
// import { TextField } from '@mui/material'

// function CurrencyInputMask() {
//     const [value, setValue] = useState('');
    
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const inputValue = event.target.value;
    
//         // Remove todos os caracteres não numéricos
//         const numericValue = inputValue.replace(/\D/g, '');
    
//         // Formata o valor para a máscara de moeda
//         const formattedValue = formatCurrency(numericValue);
    
//         setValue(formattedValue);
//       };
    
//       const formatCurrency = (value: string) => {
//         const numberFormat = new Intl.NumberFormat('pt-BR', {
//           style: 'currency',
//           currency: 'BRL',
//           minimumFractionDigits: 2,
//         });
    
//         return numberFormat.format(Number(value) / 100);
//       };
    
//       return (
//         <TextField
//           label="Preço"
//           value={value}
//           fullWidth
//           onChange={handleChange}
//           InputProps={{
//             inputProps: {
//               inputMode: 'numeric',
//             },
//           }}
//         />
//   )
// }

// export default CurrencyInputMask