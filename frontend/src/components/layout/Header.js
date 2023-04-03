import React from "react";

// MUI
import {
  Grid,
  Toolbar,
  Tooltip,
  Button,
  Typography,
  AppBar,
} from "@mui/material";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';

const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#140d01',
      },
    },
  });

const Header = () => {
  const handleLogout = (e) => {
    console.log("Logout");
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar
      color="primary"
      position="sticky"
      elevation={6}
      sx={{ zIndex: 100 }}
    >
      <Toolbar>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs>
            <Typography
              color="inherit"
              variant="h5"
              align="left"
              component="h1"
            >
              487 P3
            </Typography>
          </Grid>
          <Grid item>
            <Tooltip>
              <Button
                variant="outlined"
                color="info"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header;