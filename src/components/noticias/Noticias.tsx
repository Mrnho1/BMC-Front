import { Box, Grid, Paper, Typography } from '@mui/material'
import './Noticias.css'
import React from 'react'
import { styled } from '@material-ui/core';

function Noticias() {
  return (
    <div>
        <Grid container  alignItems='center' className='bkGrid'>
            <Grid item xs={10} sm={6} >
                <Box display='center' justifyContent='center'>
                    <img src="https://i.imgur.com/ptWtIKX.jpg" alt="" className='imgN1' />
                </Box>
            </Grid>
            <Grid item xs={10} sm={6}>
                <Box display='flex' justifyContent='center'>
                <Typography
                            variant="body2"
                            gutterBottom
                            className="ods-t"
                            justifyContent='center'
                            p={5}
                        >
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quis? Quidem, sint ea, non tenetur itaque natus reiciendis quisquam labore beatae sed cumque libero rerum magnam rem quia deleniti quam, debitis eveniet. Tempore minus iste ipsam quisquam asperiores tempora labore beatae odit sapiente voluptate consequuntur quis soluta dignissimos illum repellat, iusto autem eveniet cupiditate itaque ipsa repudiandae nemo ab. Quo quod, quaerat amet ducimus expedita, sunt numquam architecto a laudantium ipsum, itaque saepe quisquam reiciendis aut neque veritatis quia magnam natus repudiandae debitis eaque soluta. Veniam excepturi veritatis culpa rem quos? Quasi consequuntur, aperiam ea et labore quam repellendus fugiat iusto aliquid pariatur animi quia excepturi neque quaerat nulla doloremque laborum consequatur autem ratione quod error. Impedit numquam possimus at sint ad eaque sit alias cupiditate porro consectetur consequatur, id dolores? Vel deserunt pariatur dolores voluptates sed facere iusto, impedit in? Omnis placeat sint impedit molestias minima dolorem et quibusdam?
                        </Typography>
                </Box>
            </Grid>
        </Grid>
        {/* INTERVALO DE GRID */}
        <Grid container  alignItems='center' className='bkGrid mobN'>
            
            <Grid item xs={10} sm={6}>
                <Box display='flex' justifyContent='center'>
                <Typography
                            variant="body2"
                            gutterBottom
                            className="ods-t"
                            justifyContent='center'
                            p={5}
                        >
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quis? Quidem, sint ea, non tenetur itaque natus reiciendis quisquam labore beatae sed cumque libero rerum magnam rem quia deleniti quam, debitis eveniet. Tempore minus iste ipsam quisquam asperiores tempora labore beatae odit sapiente voluptate consequuntur quis soluta dignissimos illum repellat, iusto autem eveniet cupiditate itaque ipsa repudiandae nemo ab. Quo quod, quaerat amet ducimus expedita, sunt numquam architecto a laudantium ipsum, itaque saepe quisquam reiciendis aut neque veritatis quia magnam natus repudiandae debitis eaque soluta. Veniam excepturi veritatis culpa rem quos? Quasi consequuntur, aperiam ea et labore quam repellendus fugiat iusto aliquid pariatur animi quia excepturi neque quaerat nulla doloremque laborum consequatur autem ratione quod error. Impedit numquam possimus at sint ad eaque sit alias cupiditate porro consectetur consequatur, id dolores? Vel deserunt pariatur dolores voluptates sed facere iusto, impedit in? Omnis placeat sint impedit molestias minima dolorem 
                        </Typography>
                </Box>
            </Grid>
            <Grid item xs={10} sm={6} >
                <Box display='center' justifyContent='center'>
                    <img src="https://i.imgur.com/ptWtIKX.jpg" alt="" className='imgN2' />
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default Noticias