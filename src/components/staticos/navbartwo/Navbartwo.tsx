import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/material/styles";
import { Container, IconButton } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { AlignHorizontalCenter } from "@mui/icons-material";


export default function  Navbartwo() {

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
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
                {pagesLinksTwo.map((pageTw) => (
                  <List>
                    <MenuItem key={pageTw.href} onClick={handleCloseNavMenu}>
                      <ListItem>
                        <Link href={pageTw.href}>
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
                <Button>
                  <Link href={item.href} marginX={20}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
