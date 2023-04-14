import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static" style={{ background: "#C9B0D4" }}>
      <Toolbar variant="dense">
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <Link to="/home">
            <Box style={{ cursor: "pointer" }}>
              <Typography variant="h5" color="inherit">
                BlogPessoal
              </Typography>
            </Box>
          </Link>
          <Box display="flex" justifyContent="start">
            <Link to="/home">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to="/sobre">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Sobre nós
                </Typography>
              </Box>
            </Link>

            <Link to="/login">
              <Box mx={1} style={{ cursor: "pointer" }}>
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
