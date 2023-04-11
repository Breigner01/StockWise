import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Alerts from "../components/layout/Alerts";

// MUI
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Alerts />
        <Box
          component="main"
          sx={{ flex: 1, py: 6, px: 4, bgcolor: "#f2f5fa" }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;