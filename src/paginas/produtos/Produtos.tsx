import { Grid } from '@material-ui/core';
import * as React from 'react';
import Navbartwo from '../../components/navbartwo/Navbartwo';
import Carousel from '../../components/staticos/carousel/Carousel';

function Produtos() {
    return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
         <Navbartwo />
        </Grid>
        <Grid item xs={12} sm={12}>
            <Carousel />
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
