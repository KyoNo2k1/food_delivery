import { Box, Button, Typography } from "@mui/material";
import React from "react";
import BackgroundDownload from "../../../images/backgroundDownload.jpg";

const Download = () => {
  return (
    <Box
      sx={{
        px: 5,
        py: 10,
        backgroundColor: "#252b42!important",
        alignItems: "center",
        background: {
          xs: "none",
          md: `linear-gradient(0deg, rgba(37, 43, 66, 0.4), rgba(37, 43, 66, 0.4)), url(${BackgroundDownload})`,
        },
        backgroundSize: "cover!important",
        backgroundRepeat: "no-repeat!important",
        backgroundPosition: "left center!important",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "40px",
          fontWeight: "bold",
          textAlign: "center",
          px: 2,
          letterSpacing: "2px",
          mt: { xs: 0, md: 5 },
        }}
      >
        Download the app now.
      </Typography>
      <Typography
        sx={{
          display: { xs: "block", md: "none" },
          color: "#999",
          fontSize: "24px",
          textAlign: "center",
          px: 5,
          letterSpacing: "2px",
        }}
      >
        Most calendars are designed for teams.
      </Typography>
      <Typography
        sx={{
          display: { xs: "none", md: "block" },
          color: "white",
          fontSize: "24px",
          textAlign: "center",
          px: 5,
          letterSpacing: "2px",
          mt: 5,
        }}
      >
        Available on your favorite store. Start your premium experience now
      </Typography>
      <Box
        sx={{
          my: 8,
          width: "340px",
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <Button
          sx={{
            display: { xs: "block", md: "none" },
            backgroundColor: "#fa602a",
            fontSize: "14px",
            color: "white",
            px: 3,
            py: 2.5,
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Buy now
        </Button>
        <Button
          sx={{
            display: { xs: "none", md: "block" },
            backgroundColor: "#fa602a",
            fontSize: "14px",
            color: "white",
            px: 3,
            py: 2.5,
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        >
          Playstore
        </Button>
        <Button
          variant="outlined"
          sx={{
            display: { xs: "block", md: "none" },
            fontSize: "14px",
            color: "white",
            px: 4,
            py: 2.5,
            borderRadius: "10px",
            fontWeight: "bold",
            borderColor: "white",
          }}
        >
          Try for free
        </Button>
        <Button
          variant="outlined"
          sx={{
            display: { xs: "none", md: "block" },
            fontSize: "14px",
            color: "white",
            px: 4,
            py: 2.5,
            borderRadius: "10px",
            fontWeight: "bold",
            borderColor: "white",
          }}
        >
          App store
        </Button>
      </Box>
    </Box>
  );
};

export default Download;
