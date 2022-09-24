import { Box } from "@mui/material";
import React from "react";
import "./App.css";
import Banner from "./components/Container/Banner/Banner";
import Download from "./components/Container/Download/Download";
import Info from "./components/Container/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Box className="App">
      <Navbar />
      <Box>
        <Banner />
        <Info />
        <Download />
      </Box>
      <Contact />
    </Box>
  );
};

export default App;
