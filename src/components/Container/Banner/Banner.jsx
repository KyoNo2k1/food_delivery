import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import Banner1 from "../../../images/banner1.png";
import Banner2 from "../../../images/banner2.png";
import BackgroundImg from "../../../images/backgroundBanner.jpg";

// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   RoundedButton: { borderRadius: 50 },
// });

const BtnStore = styled(Button)`
  padding: 10px 50px;
  margin: 0 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 24px;
  display: block;
  text-transform: none;
  border-radius: 30px;
  margin-bottom: 20px;
`;

const Banner = () => {
  // const classes = useStyles();
  return (
    <Box
      sx={{
        height: "620px",
        background: {
          xs: "none",
          md: `linear-gradient(0deg, rgba(23, 16, 16, 0.6), rgba(23, 16, 16, 0.6)), url(${BackgroundImg})`,
        },
        backgroundSize: "contain!important",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        align="center"
        sx={{ pt: 8, fontWeight: 700, color: { xs: "#999", md: "white" } }}
      >
        Food App
      </Typography>
      <Typography
        align="center"
        gutterBottom
        sx={{
          fontWeight: 600,
          fontSize: { xs: 43, md: 60 },
          px: { xs: 1, md: 15 },
          lineHeight: { xs: 1, md: 1.5 },
          mt: { xs: 1, md: 2 },
          color: { xs: "black", md: "white" },
          letterSpacing: "0.2px",
        }}
      >
        Why stay hungry when <br />
        you can order form Bella Onojie
      </Typography>
      <Typography
        align="center"
        gutterBottom
        sx={{ fontSize: 24, px: 8, color: { xs: "#707483", md: "#dadcd8" } }}
      >
        Download the bella onoji's food app now on
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          mt: 6,
        }}
      >
        <BtnStore
          variant="contained"
          style={{ color: "white", backgroundColor: "#FA4A0C" }}
        >
          Playstore
        </BtnStore>
        <BtnStore
          sx={{
            color: { xs: "#FA4A0C", md: "white" },
            border: { xs: "1px solid #FA4A0C", md: "1px solid white" },
          }}
        >
          App store
        </BtnStore>
      </Box>
      <Box
        sx={{ width: "100%", mt: 1, display: "flex", justifyContent: "center" }}
      >
        <div style={{ width: 218, height: 550, position: "relative" }}>
          <img
            style={{
              zIndex: 1,
              float: "left",
              position: "absolute",
              top: 0,
              left: -236,
            }}
            src={Banner1}
            alt="banner1"
            width={500}
            height={480}
          />
          <div
            style={{
              position: "absolute",
              top: 55,
              right: -230,
            }}
          >
            <img
              style={{
                float: "right",
              }}
              src={Banner2}
              alt="banner2"
              width={520}
              height={500}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Banner;
