import { Grid } from '@material-ui/core';
import * as React from 'react';

function Produtos() {
    return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          colocar aqui
        </Grid>
        <Grid item xs={12} sm={12}>
          <h1>
            oque colocar aqui?
          </h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          e aqui
        </Grid>
        <Grid item xs={12} sm={6}>
          e aqui
        </Grid>
        <Grid item xs={12} sm={3}>
          AQUI
        </Grid>
        <Grid item xs={12} sm={3}>
         AQUI  
        </Grid>
        <Grid item xs={12} sm={3}>
          AQUI
        </Grid>
        <Grid item xs={12} sm={3}>
          AQUI
        </Grid>
      </Grid>
    </>
  );
}

export default Produtos;
