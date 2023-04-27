import { Button, CardActions, CardContent } from '@material-ui/core'
import { Box, Card, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Categoria } from '../../../models/Categoria'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { getAll } from '../../../services/Service'

export default function listaCategoria() {
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    )
    const history = useNavigate();
    async function getAllCategorias() {
        await getAll('/categoria', setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getAllCategorias();
    },[token])

    useEffect(() => {
        if(token === ''){
            alert ('Efetue o Login')
            history('/login')
        }
    })


  return (
    <>
      {categorias.map((categorias) => (
        <Box m={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Tema:
              </Typography>
              <Typography variant="h5" component="div">
                {categorias.tipo}
              </Typography>
              <Typography variant="h5" component="div">
                {categorias.cor}
              </Typography>
              <Typography variant="h5" component="div">
                {categorias.fluxo}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                  <Box mx={1}>
                  <Link to={`/editar-categoria/${categorias.id}`}>
                    <Button
                      variant="contained"
                      size="small"
                    >
                      Editar
                    </Button>
                    </Link>
                  </Box>
                <Link to={`/deletar-tema/${categorias.id}`}>
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      size="small"
                    >
                      Deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  )
}
