import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getById, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Categoria } from '../../../models/Categoria';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import './CadastroCategoria.css'

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

    function updateCategoria(event: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [event.target.name]: event.target.value,
        })
    }

    async function getCategoriaById(id: string) {
        getById(`/categoria/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            getCategoriaById(id)
        }
    }, [id])

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
                await put("/categoria", categoria, setCategoria, {
                    headers: {
                        'Authorization': token,
                    },
                })
                alert("Categoria atualizada com sucesso!")
                history("/categoria")
            } catch (error) {
                alert("Falha ao atualizar a categoria!")
            }
        } else {
            try { console.log(categoria)
                await post("/categoria", categoria, setCategoria, {
                    headers: {
                        'Authorization': token,
                    },
                })
                alert("Categoria cadastrada com sucesso!")
                history("/categoria")
            } catch (error) {
                alert("Falha ao cadastrar a categoria!")
            }
        }
    }

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