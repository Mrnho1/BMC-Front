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
import NumberFormat from "react-number-format";
import { CurrencyTextField } from "../../input/CurrencyTextField";
import MoedaFormato from "../../input/MoedaFormato";
import CurrencyInputMask from "../../input/CurrencyInputMask";

function CadastroProduto() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    // Remove todos os caracteres não numéricos
    const numericValue = inputValue.replace(/\D/g, "");

    // Formata o valor para a máscara de moeda
    const formattedValue = formatCurrency(numericValue);

    setValue(formattedValue);
    updateProduto(event);
  };

  const formatCurrency = (value: string) => {
    const numberFormat = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

    return numberFormat.format(Number(value) / 100);
  };

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
    preco: 0,
    img: "",
    descricao: "",
    data: "",
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

  // const MyCustomForm = () => {
  //   const {
  //       control,
  //       handleSubmit,
  //   } = useForm();

  // const handleOnChange = (inputElement, maskedValue, value) => {};

  // const [value, setValue] = useState("");
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  const validateNumber = (value: string) => {
    const numericValue = value.replace(/\D/g, '');
    return !isNaN(Number(numericValue));
  };

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
            <form
              onSubmit={onSubmit}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box className="formCadastro">
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

                {/* <TextField
                  label="Preço"
                  fullWidth
                  name="preco"
                  value={value}
                  onChange={(handleChange)}
                  InputProps={{
                    inputProps: {
                      inputMode: "numeric",
                    },
                  }}
                /> */}

<TextField
      label="Valor"
      value={produto.preco}
      name="preco"
      id="preco"
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        updateProduto(event)}
      fullWidth
      onBlur={(event) => {
        const numericValue = event.target.value.replace(/\D/g, '');
        updateProduto(formatCurrency(numericValue));
      }}
      InputProps={{
        inputProps: {
          type: 'text',
          inputMode: 'numeric',
          pattern: '[0-9]*',
          onKeyPress: (event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
            }
          },
        },
      }}
      error={!validateNumber(value)}
      helperText={!validateNumber(value) ? 'Valor inválido' : ''}
    />


                {/* <TextField
                  id="preco"
                  variant="outlined"
                  margin="normal"
                  label="Preço"
                  name="preco"
                  value={produto.preco}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateProduto(event)
                  }
                  InputProps={{
                    inputComponent: MoedaFormato as any,
                  }}
                  fullWidth
                /> */}

                <FormControl
                  variant="outlined"
                  margin="normal"
                  className="formularioCategoria"
                >
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
            </form>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default CadastroProduto;

// function CurrencyInputMaskDois() {
//   const [value, setValue] = useState('');

//   const handleChangeDois = (event: React.ChangeEvent<HTMLInputElement>) => {
//       const inputValue = event.target.value;

//       // Remove todos os caracteres não numéricos
//       const numericValue = inputValue.replace(/\D/g, '');

//       // Formata o valor para a máscara de moeda
//       const formattedValue = formatCurrency(numericValue);

//       setValue(formattedValue);
//     };

//     const formatCurrency = (value: string) => {
//       const numberFormat = new Intl.NumberFormat('pt-BR', {
//         style: 'currency',
//         currency: 'BRL',
//         minimumFractionDigits: 2,
//       });

//       return numberFormat.format(Number(value) / 100);
//     };

//     return (
//       <TextField
//         label="Preço"
//         value={value}
//         fullWidth
//         onChange={(event: ChangeEvent<HTMLInputElement>) =>
//           updateProduto(event)}
//         InputProps={{
//           inputProps: {
//             inputMode: 'numeric',
//           },
//         }}
//       />
// )
// }
