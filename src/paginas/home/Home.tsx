import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import ImgHome from "../../assets/icon/imgHome.png";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa">
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo-bem-vindo">
              Seja bem vinde ao <br /> Bem Me Care!!
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              align="center"
              className="sub-titulo">
              Cuidando de você!
            </Typography>
          </Box>
          <Box className="botaoHome">
            <Box marginRight={1}></Box>
            <Button variant="outlined">Veja os nossos produtos</Button>
            <Button variant="outlined">Apoie o nosso trabalho</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={ImgHome} alt="" width="610px" height="700px" />
        </Grid>
        <Grid xs={12} className="postagens"></Grid>
      </Grid>
    </>
  );
}

export default Home;
