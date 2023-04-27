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
import "./CadastroProduto.css";

function CadastroProduto() {
  const history = useNavigate();
  const [categorias, setCategorias] = useState([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  const { id } = useParams();
  const [categoria, setCategoria] = useState({
    id: 0,
    tipo: "",
    cor: "",
    fluxo: "",
  });

  const [produto, setProduto] = useState({
    id: 0,
    nome: "",
    descricao: "",
    preco: null,
    img: "",
    categoria: null,
  });

  function updateProduto(event) {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value,
      categoria: categoria,
    });
  }

  async function getProdutoById(id) {
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

  async function onSubmit(event) {
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
          <Grid item xs={12} className="formProduto">
            <form onSubmit={onSubmit} style={{display: "flex", justifyContent: "center"}}>
              <Box
                sx={{

                  display: "flex",
                    flexWrap: "wrap",
                    marginTop: "20px",
                    marginBottom: "20px",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "0px 0px 1px 1px black",
                    borderRadius: "5px",
                    width: "50ch",
                    padding: "20px",
                    color: "black",
                    backgroundColor: "#f5f5f5",
                }}
                noValidate
                autoComplete="on"
                >

                <TextField
                  value={produto.nome}
                  onChange={(event) => updateProduto(event)}
                  id="nome"
                  label="Nome"
                  variant="outlined"
                  name="nome"
                  margin="normal"
                  fullWidth
                />
                <TextField
                    value={produto.descricao}
                    onChange={(event) => updateProduto(event)}
                    id="descricao"
                    label="Descrição"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    fullWidth
                    />
                <TextField
                    value={produto.preco}
                    onChange={(event) => updateProduto(event)}
                    id="preco"
                    label="Preço"
                    variant="outlined"
                    name="preco"
                    margin="normal"
                    fullWidth
                    />
                <TextField
                    value={produto.img}
                    onChange={(event) => updateProduto(event)}
                    id="img"
                    label="Imagem"
                    variant="outlined"
                    name="img"
                    margin="normal"
                    fullWidth
                    />
                <FormControl sx={{ m: 1, minWidth: 120 , width: "40ch", bottom: "20px", top: "20px"}}>
                    <InputLabel id="demo-simple-select-helper-label">
                    Categoria
                    </InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={categoria}
                    label="Categoria"
                    onChange={(event) => setCategoria(event.target.value)}
                    >
                    {categorias.map((categoria: Categoria) => (
                        <MenuItem value={categoria}>{categoria.tipo}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                <Button style={{marginBottom: "20px", marginTop: "50px", backgroundColor: "#c75f77", color: "white", boxShadow:  "0px 0px 1px 1px black", borderRadius: "5px"}}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="botao"
                >
                    {produto.id !== 0 ? "Editar" : "Cadastrar"}

                </Button>

                </Box>
            </form>
            </Grid>
        </Grid>
        </Box>
    </>

    );

}

export default CadastroProduto;