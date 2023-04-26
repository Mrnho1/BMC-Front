import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAll, getById, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Categoria } from '../../../models/Categoria';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Produto } from '../../../models/Produto';

function CadastroCategoria() {
    const history = useNavigate();
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
        await getAll("/categoria", setCategoria, {
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

    // CONTINUAR DEPOIS DO ALMOÇO

    return (
        <>
            <Grid container justifyContent='center'>
                <Grid item xs={4}>
                    <Typography
                        className='textoCadastro'
                        variant='h3'
                        gutterBottom
                    >
                        {categoria.id !== 0 ? 'Editar categoria' : 'Cadastrar categoria'}
                    </Typography>
                    <form onSubmit={onSubmit}>
                        <Box display='flex' flexDirection='column' gap={2}>
                            <TextField
                                label='Tipo'
                                name='tipo'
                                value={categoria.tipo}
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    updateCategoria(event)
                                }
                            />
                            <Box display='flex' flexDirection='column' gap={2}>
                                <TextField
                                    label='Cor'
                                    name='cor'
                                    value={categoria.cor}
                                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                        updateCategoria(event)
                                    }
                                />
                                <Box display='flex' flexDirection='column' gap={2}>
                                    <TextField
                                        label='Fluxo'
                                        name='fluxo'
                                        value={categoria.fluxo}
                                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                            updateCategoria(event)
                                        }
                                    />
                                    <Button
                                        type='submit'
                                        variant='contained'
                                        disabled={((categoria.tipo.length && categoria.cor.length && categoria.fluxo.length) < 3)}>
                                        Finalizar
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}

export default CadastroCategoria