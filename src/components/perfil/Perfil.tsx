import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getById } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokensReducer";
import User from "../../models/User";
import { Avatar, Container, Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import "./Perfil.css"

function Perfil() {
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const [usuario, setUsuario] = useState<User>({
    id: +userId,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  async function getUserById(id: number) {
    await getById(`/user/${id}`, setUsuario, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getUserById(+userId);
  }, []);

  return (
    <>
      <Container style={{display: 'flex'}}  className="cont">
        <Grid xs={3} alignItems="center" justifyContent="center" >
          <Avatar
            src={usuario.foto}
            alt=""
            style={{ width: "15rem", height: "15rem", margin: "0 auto" }} className="grid"
          />
          <Typography variant="h5" align="center">
            {usuario.nome}
          </Typography>
        </Grid>
        <Grid justifyContent="flex-start" className="typog" >
          <Typography variant="h4">
            {""}
            Produtos de {usuario.nome}
          </Typography>
          Seu total de {usuario.produto?.length} postagens
          {usuario.produto?.map((post) => (
            <p>{post.categoria}</p>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Perfil;
