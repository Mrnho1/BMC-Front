import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Contato.css";
import ImgContato from "../../assets/img/pessoaBMC.png";
import { Link } from "react-router-dom";

function Contato() {
  return (
    <>
      <Grid className="caixaContato">
        <Grid
          container
          alignItems="center"
          alignContent="center"
          justifyContent="center"
          item
          md={7}
        >
          <Grid item>
            <Box paddingX={12}>
              <Typography className="titulo1">
                Você sabia que algumas pessoas não conseguem comprar
                absorventes?
              </Typography>
              <Typography className="texto1">
                Infelizmente, essa é a realidade algumas pessoas não têm acesso
                a produtos básicos de higiene.
                <br />
                <br /> Leia um pouco mais sobre esse assunto clicando{" "}
                <a
                  onClick={() =>
                    window.open(
                      "https://www.unicef.org/brazil/relatorios/pobreza-menstrual-no-brasil-desigualdade-e-violacoes-de-direitos",
                      "_blank"
                    )
                  }
                >
                  AQUI
                </a>
              </Typography>
              <Typography className="texto2">
                Mas com sua ajuda, há esperança!
              </Typography>
            </Box>
          </Grid>

          <Grid item className="bttnImagens">
          <img
              className="ApoieContato"
              src='/src/assets/BMC-IMAGENS/doacoes.png'
              alt=""
              width="26%"
            />
            <img
              className="ApoieContato"
              src='/src/assets/BMC-IMAGENS/juntese.png'
              alt=""
              width="33%"
            />
             <img
              className="ApoieContato"
              src='/src/assets/BMC-IMAGENS/compartilhe.png'
              alt=""
              width="33%"
              onClick={() =>
                window.open(
                    'https://www.instagram.com/carebemme/'
                )
              }

            />
            </Grid>
            <Box className="btnContato">
              <Grid alignItems="center">
              <Link to={"/produtos"}>
                  <Button fullWidth variant="outlined" style={{margin: '10px'}}>
                    Veja os nossos produtos
                  </Button>
                </Link>
                <Button fullWidth variant="outlined">
                  Apoie o nosso trabalho
                </Button>
              </Grid>
            </Box>
   
        </Grid>
        <Grid md={5}>
          <Box display={"flex"} justifyContent={"center"}>
            <img className="ImgContato" src={ImgContato} alt="" width="75%" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Contato;
