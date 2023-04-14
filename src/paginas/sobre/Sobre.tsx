import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Sobre.css";

function Sobre() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={10}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              className="titulo"
            >
              Sobre o Bem Me Care
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              className="texto"
            >
              Nossa marca preza pelo fim da pobreza menstrual, por isso nós
              revertemos parte de nossas vendas para distribuição de absorventes
              em escolas públicas periféricas.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="/src/assets/img/Bem me care.png"
            alt=""
            className="fotoHome"
          />
        </Grid>
        <Grid xs={12} className="postagens"></Grid>
      </Grid>

      <Grid container direction="row" className="containerCards">
        <Grid item xs={4}>
          <Box paddingX={5} className="cardsPink">
              <Typography
                variant="h5"
                gutterBottom
                component="h5"
                className="texto"
              >
                Quem somos?
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="h6"
                className="texto"
              >
                Somos uma Ong que trabalha lidando com a ODS da Onu de número 9:
                "Indústria, Inovação e Infraestrutura". Trabalhamos com produtos
                de higiene íntima para pessoas que menstruam que são inclusivos
                também são sustentáveis. Além de ser de valor acessível.
                Contamos com tecnologia que propõe conforto no uso, absorção rápida, impermeabilidade e antibacteriana.
              </Typography>
            </Box>
        </Grid>
        <Grid item xs={4}>
        <Box paddingX={5} className="cardsBlue" >
              <Typography
                variant="h5"
                gutterBottom
                component="h5"
                className="texto"
              >
                Nossa Missão
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="h6"
                className="texto"
              >
                Nossa missão é diminuir a pobreza menstrual em escolas públicas através da distribuição de absorventes para pessoas que não têm acesso e que consequentemente necessitam se ausentar das aulas durante esse período.
              </Typography>
            </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Sobre;
