import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import "./CadastroUsuario.css";
import { cadastroUsuario } from "../../services/Service";
import { toast } from "react-toastify";

function CadastroUsuario() {
  const history = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  // Início do balão de informação de Cadastro realizado com sucesso
  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (confirmarSenha === user.senha) {
      try {
        await cadastroUsuario("/usuarios/cadastrar", user, setUserResult);
        toast.success("Usuário cadastrado com sucesso", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // Fim do balão de informação de Cadastro realizado com sucesso
        // Início do balão de informação de Verificação dos dados do usuário
      } catch (error) {
        toast.error("Por favor, verifique os campos", {
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
      // Fim do balão de informação de Verificação dos dados do usuário
      // Início do balão de informação de Verificação de senha do usuário
    } else {
      toast.warn("As senhas não coincidem", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setConfirmarSenha("");
      setUser({
        ...user,
        senha: "",
      });
    }
  }
  // Fim do balão de informação de Verificação de senha do usuário
  useEffect(() => {
    console.log("rodou");
  }, [user.nome]);

  useEffect(() => {
    if (userResult.id !== 0) {
      history("/login");
      console.log(userResult);
    }
  }, [userResult]);

  function back() {
    history("/login");
  }

  return (
    // Início da estrutura da tela de Cadastro para aparecer na tela
    <Grid container direction="row" justifyContent="center" alignItems="center" className="fundoCadastro">
      {/* Início da imagem que aparece na lateral esquerda do form de Cadastro */}
      <Grid item xs={12} md={6} className="imagemCadastro"></Grid>
      {/* Fim da imagem que aparece na lateral esquerda do form de Cadastro */}
      <Grid item xs={12} md={6} alignItems="center">
        <Box paddingX={10} marginBottom={5}>
          {/* Início do formulário para o usuário se cadastrar preenchendo os dados solicitados */}
          <form onSubmit={onSubmit} className="form-Cadastro">
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="tituloCadastro">
              Faça o seu cadastro
            </Typography>
            {/* Início do input para o usuário digitar nome e sobrenome */}
            <TextField
              id="nome"
              label="Nome e Sobrenome"
              variant="outlined"
              name="nome"
              margin="normal"
              required
              value={user.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)}
              fullWidth />
            {/* Fim do input para o usuário digitar nome e sobrenome */}
            {/* Início do input para o usuário digitar e-mail */}
            <TextField
              type="email"
              id="usuario"
              label="Digite um e-mail"
              variant="outlined"
              name="usuario"
              margin="normal"
              required
              value={user.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)}
              fullWidth />
            {/* Fim do input para o usuário digitar e-mail */}
            {/* Início do input para o usuário colar a URL de uma foto - não é obrigatória */}
            <TextField
              id="foto"
              label="Adicione a URL de uma foto (opcional)"
              variant="outlined"
              name="foto"
              margin="normal"
              value={user.foto}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)}
              fullWidth />
            {/* Fim do input para o usuário colar a URL de uma foto - não é obrigatória */}
            {/* Início do input para o usuário digitar uma senha */}
            <TextField
              id="senha"
              label="Digite uma senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              required
              value={user.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)}
              fullWidth />
            {/* Fim do input para o usuário digitar uma senha */}
            {/* Início do input para o usuário confirmar a senha digitada anteriormente */}
            <TextField
              id="confirmarSenha"
              label="Confirme a senha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              required
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(event)}
              fullWidth />
            {/* Fim do input para o usuário confirmar a senha digitada anteriormente */}
            {/* Início dos botões para cancelar = voltar para login ou para cadastrar = finalizar o cadastro e ir para logar */}
            <Box marginTop={2} textAlign="center">
              <Button onClick={back} variant="contained">
                Cancelar
              </Button>
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
            </Box>
            {/* Fim dos botões para cancelar = voltar para login ou para cadastrar = finalizar o cadastro e ir para logar */}
          </form>
          {/* Fim do formulário para o usuário se cadastrar preenchendo os dados solicitados */}
        </Box>
      </Grid>
    </Grid>
    // Fim da estrutura da tela de Cadastro para aparecer na tela
  );
}

export default CadastroUsuario;
