import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAll, getById, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Categoria } from '../../../models/Categoria';
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, List, ListItem, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Produto } from '../../../models/Produto';

function CadastroProduto() {
    const history = useNavigate();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )

    const { id } = useParams<{ id: string }>();
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        tipo: '',
        cor: '',
        fluxo: '',
    })

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        preco: 0,
        img: '',
        descricao: '',
        data: '',
        categoria: null
    })

    function updateProduto(event: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [event.target.name]: event.target.value, categoria: categoria,
        })
    }

    async function getProdutoById(id: string) {
        getById(`/produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getCategoria();
        if (id !== undefined) {
            getProdutoById(id)
        }
    }, [id])

    async function getCategoria() {
        await getAll("/categoria", setCategorias, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (token === '') {
            alert('Efetue o login')
            history('/login')
        }
    }, [token])

    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        if (id !== undefined) {
            try {
                await put("/produtos", produto, setProduto, {
                    headers: {
                        'Authorization': token
                    },
                })
                alert("Produto atualizado com sucesso!")
                history("/produtos")
            } catch (error) {
                alert("Falha ao atualizar o produto!")
            }
        } else {
            try {
                await post("/produtos", produto, setProduto, {
                    headers: {
                        'Authorization': token
                    },
                })
                alert("Produto cadastrado com sucesso!")
                history("/produtos")
            } catch (error) {
                alert("Falha ao cadastrar o produto!")
            }
        }
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12} className="nomeProduto">
                    <Typography
                        variant="h3"
                        component="h1"
                        align="center"
                        className="textoProd"
                    >
                        {produto.id !== 0 ? "Editar produto" : "Cadastrar produto"}
                    </Typography>
                    <form onSubmit={onSubmit}>
                        <TextField
                            value={produto.nome}
                            onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                updateProduto(event)
                            }
                            id="nome"
                            label="nome"
                            variant="outlined"
                            name="nome"
                            margin="normal"
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
                            multiline
                            minRows={4}
                        />

                        <FormControl className="formulario">
                            <InputLabel id="demo-simple-select-helper-label">
                                Categoria
                            </InputLabel>
                            <FormHelperText>Escolha uma categoria para o produto</FormHelperText>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                onChange={(event) =>
                                    getById(`/categoria/${event.target.value}`, setCategoria, {
                                        headers: {
                                            Authorization: token,
                                        },
                                    })
                                }>
                                    
                                {categorias.map((categorias) => (
                                    
                                        <MenuItem value={categorias.id}>{categorias.tipo} {categorias.fluxo} {categorias.cor}</MenuItem>
                                  
                                ))}
                            </Select>
                         
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={categoria.id === 0}
                                className="buttonProduto"
                            >
                                Finalizar
                            </Button>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default CadastroProduto