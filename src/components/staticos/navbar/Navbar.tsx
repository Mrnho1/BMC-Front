import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link as linkUm, useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import "./Navbar.css";
import { colors } from "@material-ui/core";
import { useEffect, useState } from "react";
import useLocalStorage from "react-use-localstorage";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem/ListItem";

const pages = ["Home", "Sobre", "Contato", "Produtos", "Sobre", "Cadastro"];

const pageslinks = [
  "/home",
  "/sobre",
  "/contato",
  "/produtos",
  "/sobre",
  "/cadastro",
];


const settings = [
  { name: "Perfil", href: "" },
  { name: "Logout", href: "/login" },
];

function ResponsiveAppBar() {
  const [token, setToken] = useLocalStorage("token");
  const [log, setLog] = useState(token);
  function goLogout() {
    setToken("");
    setLog(token);
    alert("Usuário deslogado");
  }

  console.log(log);
  const [isLogged, setIsLogged] = useState(false);
  const history = useNavigate();

  // if (token !== '') {
  //   setnavbarUserIsLogged(true);
  //   setTrend(count > prevCount ? 'increasing' : 'decreasing');
  // }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // useEffect(() => {
  //   const loggedIn = false
  //   if (token === "") {
  //     setLogado(false)
  //   } else {
  //     setLogado = true
  //   }
  // }, [token]);

  // useEffect(() => {
  //   (async () => {
  //     const loggedIn = await token;
  //     if (loggedIn) setnavbarUserIsLogged(true);
  //   })();
  // }, [navbarUserIsLogged]);

  // useEffect(() => {
  //   if (token !== "") {
  //     setLog(token)
  //   }
  // });

  return (
    <AppBar position="static" style={{ backgroundColor: "#c75f77" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img
            src="https://avatars.githubusercontent.com/u/129092790?s=96&v=4"
            alt="Logo da marca BMC"
            style={{ width: "70px", padding: "10px" }}
          />
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BMC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {/* <Link to={pageslinks[pages.indexOf(page)]} className="link">
                  {page}
                </Link> */}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              {token !== "" ? (
                <Tooltip title={""}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyItems: "center",
                  }}
                >
                  <Link href={"/login"} className="link">
                    <Typography className="text-color">Login</Typography>
                  </Link>

                  <Divider
                    sx={{ backgroundColor: "white", marginX: "8px" }}
                    orientation="vertical"
                    flexItem
                  />

                  <Link href={"/cadastro"} className="link">
                    <Typography className="text-color">Cadastro</Typography>
                  </Link>
                </Box>
              )}
            </Box>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <List>
                {settings.map((setting) => (
                  <ListItem key={setting.name}>
                    <Link
                      onClick={goLogout}
                      variant="button"
                      underline="none"
                      href={setting.href}
                    >
                      {setting.name}
                      {/* {setting.name === 'LOGOUT' ? (goLogout) : ('') } */}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
