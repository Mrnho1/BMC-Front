import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <AppBar position="static" style={{ background: "#CCB3DA" }}>
      <Toolbar variant="dense">
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Link to="/home">
            <Box className="cursor caixaLogo">
              <Typography variant="h5" color="inherit">
                <img src="https://i.imgur.com/niT17YS.png" alt="" className="img-logo"/>
              </Typography> 
              <Typography variant="h5" color="inherit">
                Bem Me Care 
              </Typography>
            </Box>
          </Link>
          <Box display="flex" justifyContent="start" alignItems={'center'}>
            <Link to="/home">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to="/sobre">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit">
                  Sobre nós
                </Typography>
              </Box>
            </Link>
            <Link to="/team">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit">
                  Equipe
                </Typography>
              </Box>
            </Link>

            <Link to="/login">
              <Box mx={1} className="cursor btn-legal">
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
