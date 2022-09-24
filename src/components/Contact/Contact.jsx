import React from "react";
import { Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactImg from "../../images/contactImg.png";

const Contact = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: { xs: "none", md: "space-around" },
        my: 8,
      }}
    >
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <img src={ContactImg} alt="ContactImg" width="246" height="102" />
      </Box>
      <Box
        sx={{
          width: "200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TwitterIcon sx={{ color: "#fa602a", width: "35px", height: "35px" }} />
        <FacebookIcon
          sx={{ color: "#fa602a", width: "35px", height: "35px" }}
        />
        <LinkedInIcon
          sx={{ color: "#fa602a", width: "35px", height: "35px" }}
        />
      </Box>
      <Typography
        align="center"
        sx={{ display: { xs: "block", md: "none" }, fontSize: "12px", mt: 2 }}
      >
        Just type what's on your mind and we'll
      </Typography>
      <Typography
        align="center"
        sx={{ display: { xs: "none", md: "block" }, fontSize: "12px", mt: 2 }}
      >
        Copywright 2020 Bella Onojie.com
      </Typography>
    </Box>
  );
};

export default Contact;
