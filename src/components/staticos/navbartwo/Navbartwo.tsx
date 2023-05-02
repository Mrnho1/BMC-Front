import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Container, IconButton, Paper } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { AlignHorizontalCenter } from "@mui/icons-material";
import "./Navbartwo.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export default function Navbartwo() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const pagesLinksTwo = [
    { name: "Home", href: "/home" },
    { name: "Sobre", href: "/sobre" },
    { name: "Produtos", href: "/produtos" },
    { name: "Equipe", href: "/team" },
    { name: "Contato", href: "/contato" },
    { name: "Categorias", href: "/categoria" },
    { name: "Cadastrar Categoria", href: "/cadastroCategoria" },
    { name: "Cadastrar Produto", href: "/cadastroProduto" },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(false);

  const useStyles = makeStyles({
    drawer: {
      background: '#c75f77',
    },
  });

  const classes = useStyles();

  return (
    <Box sx={{ padding: 0, margin: 0 }}>
      <AppBar position="static" style={{ backgroundColor: "#78a493" }}>
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setOpen(true)}
                color="inherit"
                className="buttonNavDois"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pagesLinksTwo.map((pageTw) => (
                  <List>
                    <MenuItem key={pageTw.href} onClick={handleCloseNavMenu}>
                      <ListItem>
                        <Link to={pageTw.href}>
                          <Typography
                            textAlign="center"
                            className="botoesNavbarTwo"
                          >
                            {pageTw.name}
                          </Typography>
                        </Link>
                      </ListItem>
                    </MenuItem>
                  </List>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                justifyContent: "center",
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {pagesLinksTwo.map((item) => (
                <Button
                  className="buttonNavDois"
                  sx={{ backgroundColor: "#78a493" }}
                >
                  <Link className="linkNavDois" to={item.href}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
          <SwipeableDrawer
          anchor="top"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          sx={{color: '#78a493'}}
          className="drawer"
          classes={{ paper: classes.drawer }}
        >
          <Paper style={{backgroundColor: '#c75f77'}} >
          {pagesLinksTwo.map((pageTw) => (
                  <List>
                    <MenuItem key={pageTw.href} onClick={handleCloseNavMenu}>
                      <ListItem>
                        <Link to={pageTw.href}>
                          <Typography
                            textAlign="center"
                            className="botoesNavbarTwo"
                          >
                            <Button>
                            {pageTw.name}
                            </Button>
                          </Typography>
                        </Link>
                      </ListItem>
                    </MenuItem>
                  </List>
                ))}
                </Paper>
        </SwipeableDrawer>
        </Container>
      </AppBar>
    </Box>
  );
}
