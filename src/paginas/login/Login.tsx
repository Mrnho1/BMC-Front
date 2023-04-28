import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { addToken } from "../../store/tokens/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Login() {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const useHistory = useNavigate();
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    token: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await login("/usuarios/logar", userLogin, setToken);
      toast.success("Usuario logado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Usúario ou senha invalidos", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      useHistory("/home");
    }
  }, [token]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction={largeScreen ? "row" : "column-reverse"}
      className="FundoLogin">
      <Grid item xs={12} md={6}>
        <Box paddingX={6}>
          <form onSubmit={onSubmit} className="formLogin">
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="tituloLogin">
              Faça o seu Login
            </Typography>
            <TextField
              id="usuario"
              label="Digite o seu e-mail"
              variant="outlined"
              name="usuario"
              margin="normal"
              value={userLogin.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              fullWidth
            />
            <TextField
              id="senha"
              label="Digite a sua senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              value={userLogin.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
              }
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>

            <Typography variant="subtitle1" gutterBottom align="center">
              <Link to="/cadastro">Cadastre-se</Link>
            </Typography>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Login;
