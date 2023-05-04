import { Card, Grid, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Carousel from '../../staticos/carousel/Carousel'
import { Avatar, Box, Button, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { Produto } from '../../../models/Produto';
import { Link, useNavigate } from 'react-router-dom'
import { getAll } from '../../../services/Service'
import './ListaProduto.css'
import { toast } from 'react-toastify'

function ListaProduto() {

  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  const [produtos, setProdutos] = useState<Produto[]>([])
  const history = useNavigate()

  async function getAllProdutos() {
    await getAll('/produtos', setProdutos, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    getAllProdutos()
  }, [produtos.length])

  useEffect(() => {
    if (token === '') {
      toast.info('Efetue o login', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      history('/login')
    }
  }, [token])

  return (
    <>
      <div className='fundoCardCompleto'>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Carousel />
          </Grid>
        </Grid >

        <Grid container spacing={4} className='gridCard' >
          {produtos.map((produto) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box boxShadow={4} className='cardProduto'>
                <div className='fundoCard'>
                  <h1 className='nomeProduto'>{produto.nome}</h1>
                  <img className='imgProduto' src={produto.img} alt={produto.nome} />
                  <h3 className='txtPreco'>R$ {produto.preco}</h3>
                  <h3 className='txtDescricao'>{produto.descricao}</h3>
                  <Typography className='txtCategoria'>{produto.categoria?.cor} | {produto.categoria?.tipo} | {produto.categoria?.fluxo}</Typography>
                  <Typography className='txtAutor'>
                    Postado por: {produto.usuario?.nome}
                  </Typography>
                  <h3 className='dataProduto'> {Intl.DateTimeFormat('pt-BR', {
                    dateStyle: 'short'
                  }).format(new Date(produto.data))}</h3>
                  <Box className='btnProdutos' mb={1.5}>
                    <Link to={`/editar-produto/${produto.id}`}>
                      <Box mx={1}>
                        <Button variant='contained' size="small">Editar</Button>
                      </Box>
                    </Link>
                    <Link to={`/deletar-produto/${produto.id}`}>
                      <Box mx={1}>
                        <Button variant='contained' size="small">Deletar</Button>
                      </Box>
                    </Link>
                  </Box>
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
<<<<<<< HEAD

      </Grid>
      <Paper>
        <div>
          <Grid container spacing={4} className='gridCard' >
            {produtos.map((produto) => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Box boxShadow={4}>
                    <div className='produto' style={{ padding: "25px", margin: "15px" }}>
                      <h1>{produto.nome}</h1>
                      <img src={produto.img} alt={produto.nome} className='imgProduto'/>
                      <h3>{produto.descricao}</h3>
                      <h3>{produto.preco}</h3>
                      <h3> Data: {Intl.DateTimeFormat('pt-BR', {dateStyle: 'full', timeStyle: 'short'}).format(new Date(produto.data))}</h3>
                      <Box display='flex' justifyContent='center' mb={1.5}>
                            <Link to={`/editar-produto/${produto.id}`}>
                            <Box mx={1}>
                                <Button variant='contained' size="small">Editar</Button>
                            </Box>
                            </Link>
                            <Link to={`/deletar-produto/${produto.id}`}>
                            <Box mx={1}>
                                <Button variant='contained' size="small">Deletar</Button>
                            </Box>
                            </Link>
                            </Box>
                            <Typography variant="body2" component='p'>
                              Postado por: {produto.usuario?.nome}
                            </Typography>
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
            </div>
          </Paper>
        </>
=======
      </div>
    </>
>>>>>>> 82d0233518b8329080a4df6742fc13c4cd951e56
  )

}

export default ListaProduto