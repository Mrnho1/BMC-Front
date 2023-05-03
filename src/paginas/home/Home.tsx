import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import TabProdutos from '../../components/produtos/tabProdutos/TabProdutos';
import Navbartwo from '../../components/staticos/navbartwo/Navbartwo';

function Home() {
  // Início da lógica


  // Variáveis usados na página Home
const history = useNavigate();
const token = useSelector<TokenState, TokenState["tokens"]>(
  (state) => state.tokens
);

// Condição para que o usuário só tenha acesso a página após realizar o Login
useEffect(() => {
  if (token == "") {
    toast.info('Você precisa estar logado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    history("/login");
  }
}, [token]);

  return (
    <>
     {/* Início da Grid container que abriga a face da nossa Home */}
      <Grid
        container
        direction="row"
        className="caixa"
        md={12}
      >
        {/* Grid container que centraliza o conteúdo do item */}
        <Grid
          container
          alignContent="center"
          justifyContent="center"
          item
          md={6}
        >
          {/* Grid item que abriga as boas vindas*/}
          <Grid item>
            {/* Box que estiliza e abriga as boas vindas */}
            <Box paddingX={10}>
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="titulo-bem-vindo"
              >
                Seja bem vinde ao <br /> Bem Me Care!
              </Typography>
              <Typography
                variant="h5"
                component="h5"
                align="center"
                className="sub-titulo"
              >
                Cuidando de você!
              </Typography>
            </Box>
          </Grid>
          {/* Grid item que abriga os botões de ver produtos e apoiar nosso projeto  */}
          <Grid item>
            {/* Box para abrigar e estilizar o botão que leva até a página de produtos */}
            <Box className="bttnHome" marginX={15}>
              {/* Inserção do link para redirecionar o usuário para a página de produtos */}
                <Link to={"/produtos"}>
                  <Button fullWidth variant="outlined" style={{margin: '10px'}}>
                    Veja os nossos produtos
                  </Button>
                </Link>
                {/* Botão que deverá recirecionar a uma forma de apoiar nosso projeto (implementação futura) */}
                <Button fullWidth variant="outlined">
                  Apoie o nosso trabalho
                </Button>
            </Box>
          </Grid>
        </Grid>
        {/* Grid item que vai abrigar a imagem ilustrativa escolhida para a página Home */}
        <Grid item md={6}>
          {/* Box usada para estilizar imagem */}
          <Box display={"flex"} justifyContent={"center"}>
            {/* Imagem ilustrativa da página Home */}
            <img className="imgHome" src='https://i.imgur.com/hWMsMsJ.png' alt="" width="70%" />
          </Box>
        </Grid>
      </Grid>
      {/* Final da Grid container da face da Home */}
      {/* Incio da Grid que abriga a Tab de podutos, onde podemos ter acesso a sua lista mesmo fora da página de produtos */}
      <Grid xs={12}>
        <TabProdutos />
      </Grid>
      {/* Final da Grid que abriga a Tab de podutos, onde podemos ter acesso a sua lista mesmo fora da página de produtos */}
    </>
  );
}

export default Home;
