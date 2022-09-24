import React from "react";

import Box from "@mui/material/Box";
import ImageLogo from "../../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const NavLink = styled(Typography)`
  color: black;
  padding: 20px 50px;
  cursor: pointer;
  font-weight: bold;
  :hover {
    color: #fa602a;
  }
`;

const Navbar = () => {
  return (
    <Box
      sx={{
        height: 120,
        backgroundColor: "primary.paper",
      }}
      style={{ justifyContent: "space-between", display: "flex" }}
    >
      <Box style={{ margin: "17px 25px" }}>
        <img src={ImageLogo} alt="Logo" width={104} height={52} />
      </Box>
      <Box sx={{ display: { md: "none" }, m: 3 }}>
        <MenuIcon fontSize="large" />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <NavLink style={{ color: "#fa602a" }}>Home</NavLink>
        <NavLink>Product</NavLink>
        <NavLink>Faq</NavLink>
        <NavLink>Contact</NavLink>
      </Box>
    </Box>
  );
};

export default Navbar;
