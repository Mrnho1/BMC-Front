import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card } from '@material-ui/core';
import imagem from './logoRosa.png';
import { ImportContacts } from '@material-ui/icons';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function GridProutos() {
    return (
        // 16 cards
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{ padding: '50px', textAlign: 'center', justifyContent: 'center' }}>
                <Button variant="contained" color="primary">
                    CONHEÇA NOSSOS PRODUTOS
                </Button>
            </Grid>
            <Card>
                <Grid container spacing={2} style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <Grid item xs={12} sm={3} style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <Item>
                <img src={imagem} alt="produtos=grid" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" >
                       
                    </Button>
                    <Button variant="contained" color="secondary">
                       
                    </Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Item>
                <img src={imagem} alt="Ribeiro" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" >
                       
                    </Button>
                    <Button variant="contained" color="secondary">
                       
                    </Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Item>
                            <img src={imagem} alt="Ribeiro" style={{ width: '100%' }} />
                            <h3>Nome do Produto</h3>
                            <p>Descrição do Produto</p>
                            <div>
                                cores disponiveis:
                                <Button variant="contained" color="primary" >

                                </Button>
                                <Button variant="contained" color="secondary">

                                </Button>
                            </div>
                            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                                Saiba Mais
                            </Button>
                            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                                Adicionar ao Carrinho
                            </Button>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Item>
                <img src={imagem} alt="Ribeiro" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" >
                       
                    </Button>
                    <Button variant="contained" color="secondary">
                       
                    </Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Item>
                <img src={imagem} alt="Ribeiro" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" >
                       
                    </Button>
                    <Button variant="contained" color="secondary">
                       
                    </Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Item>
                <img src={imagem} alt="Ribeiro" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" >
                       
                    </Button>
                    <Button variant="contained" color="secondary">
                       
                    </Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Item>
                <img src={imagem} alt="Ribeiro" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" >
                       
                    </Button>
                    <Button variant="contained" color="secondary">
                       
                    </Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Item>
                <img src={imagem} alt="Ribeiro" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" >
                       
                    </Button>
                    <Button variant="contained" color="secondary">
                       
                    </Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Item>
                <img src={imagem} alt="Ribeiro" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" >
                       
                    </Button>
                    <Button variant="contained" color="secondary">
                       
                    </Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Item>
                <img src={imagem} alt="Ribeiro" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" >
                       
                    </Button>
                    <Button variant="contained" color="secondary">
                       
                    </Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Item>
                <img src={imagem} alt="Ribeiro" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" >
                       
                    </Button>
                    <Button variant="contained" color="secondary">
                       
                    </Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <Item>
                <img src={imagem} alt="Ribeiro" style={{width: '100%'}}/>
                <h3>Nome do Produto</h3>
                <p>Descrição do Produto</p>
                <div>
                    cores disponiveis:
                    <Button variant="contained" color="primary" ></Button>
                    <Button variant="contained" color="secondary"></Button>
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Saiba Mais
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                    Adicionar ao Carrinho
                </Button>
            </Item>
                    </Grid>

                </Grid>
            </Card>
        </Box>
    );
}



