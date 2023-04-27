import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Categoria } from "../../../models/Categoria";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { Produto } from "../../../models/Produto";
import { getAll, getById, post, put } from "../../../services/Service";
import { Box, FormControl } from "@mui/material";
import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import './CadastroProduto.css'

function CadastroProduto() {
  const history = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const { id } = useParams<{ id: string }>();
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    tipo: "",
    cor: "",
    fluxo: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    preco: "",
    img: "",
    categoria: null,
  });

  function updateProduto(event: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
      categoria: categoria,
    });
  }
  async function getProdutoById(id: string) {
    getById(`/produtos/${id}`, setProduto, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getCategoria();
    if (id !== undefined) {
      getProdutoById(id);
    }
  }, [id]);

  async function getCategoria() {
    await getAll("/categoria", setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === "") {
      alert("Efetue o login");
      history("/login");
    }
  }, [token]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id !== undefined) {
      try {
        await put("/produtos", produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        alert("Produto atualizado com sucesso!");
        history("/produtos");
      } catch (error) {
        alert("Falha ao atualizar o produto!");
      }
    } else {
      try {
        await post("/produtos", produto, setProduto, {
          headers: {
            Authorization: token,
          },
        });
        alert("Produto cadastrado com sucesso!");
        history("/produtos");
      } catch (error) {
        alert("Falha ao cadastrar o produto!");
      }
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="nomeProduto">
            <Typography
              variant="h3"
              component="h1"
              align="center"
              className="textoCP"
            >
              {produto.id !== 0 ? "Editar produto" : "Cadastrar produto"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <form onSubmit={onSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
              >
                <TextField
                  value={produto.nome}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateProduto(event)
                  }
                  id="nome"
                  label="Nome"
                  variant="outlined"
                  name="nome"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  value={produto.descricao}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateProduto(event)
                  }
                  id="descricao"
                  label="Descricao"
                  name="descricao"
                  variant="outlined"
                  margin="normal"
                  multiline
                  minRows={4}
                  fullWidth
                />
                <TextField
                  value={produto.preco}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateProduto(event)
                  }
                  id="preco"
                  label="preco"
                  name="preco"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  value={produto.img}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateProduto(event)
                  }
                  id="img"
                  label="img"
                  name="img"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <FormControl variant="outlined" margin="normal" className="formularioCategoria">
                  <InputLabel id="demo-simple-select-helper-label">
                    Categoria
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    onChange={(event) =>
                      getById(
                        `/categoria/${event.target.value}`,
                        setCategoria,
                        {
                          headers: {
                            Authorization: token,
                          },
                        }
                      )
                    }
                  >
                    {categorias.map((categorias) => (
                      <MenuItem value={categorias.id}>
                        {categorias.tipo} {categorias.fluxo} {categorias.cor}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Box className="botao">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    {produto.id !== 0 ? "Editar" : "Cadastrar"}
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={() => history("/produtos")}
                  >
                    Cancelar
                  </Button>
                </Box>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default CadastroProduto;
