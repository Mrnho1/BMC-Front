import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


const pagesLinks = [
  { name: "Home", href: "" },
  { name: "Sobre", href: "" },
  { name: "Produtos", href: "" },
  { name: "Equipe", href: "" },
  { name: "Contato", href: "" },
];

export default function  Navbartwo() {
  return (
    <Box sx={{ padding: 0, margin: 0}}>
      <AppBar position="static" style={{backgroundColor: '#78a493'}}>
        <Toolbar>
        {pagesLinks.map((item) => (
          <Link
          href={item.href}
          >
            {item.name}
          </Link>
        ))
        }

        </Toolbar>
      </AppBar>
    </Box>
  );
}
