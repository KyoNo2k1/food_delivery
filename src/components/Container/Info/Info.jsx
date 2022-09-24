import { Box, Divider, styled, Typography } from "@mui/material";
import React from "react";
import imgInfo_1 from "../../../images/imgInfo_0.png";
import imgInfo_2 from "../../../images/imgInfo_1.png";
import imgInfo_3 from "../../../images/imgInfo_2.png";

const headerName = ["Create an account", "Explore while shopping", "Checkout"];
const topic = [
  "Create/login to an existing account to get started",
  "Shop for your favorites meal as e dey hot",
  "When you done check out and get it delivered.",
];
const detail = [
  "An account is created with your email and a desired password",
  "Shop for your favorite meals or drinks and enjoy while doing it.",
  "When you done check out and get it delivered with ease.",
];

const ImgInfo = styled("img")({
  width: "550px",
  height: "480px",
});

const Info = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <Box sx={{ height: 1, pt: 60, width: "100%" }}>
        <Divider
          variant="middle"
          sx={{
            mt: 10,
            borderBottomWidth: 2,
            marginLeft: { xs: 0, md: "20%" },
            marginRight: { xs: 0, md: "20%" },
            display: { xs: "none", md: "block" },
          }}
        />
        <Typography
          variant="h5"
          align="center"
          sx={{
            my: 4,
            fontWeight: "bold",
            fontSize: { xs: "24px", md: "44px" },
          }}
        >
          How the app works
        </Typography>
        <Divider
          variant="middle"
          sx={{
            borderBottomWidth: 2,
            marginLeft: { xs: 0, md: "20%" },
            marginRight: { xs: 0, md: "20%" },
            display: { xs: "block", md: "none" },
          }}
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        {headerName.map((text, index) => {
          var rowStyle = "row-reverse";
          var marginStyleLeft = 20;
          var marginStyleRight = 20;
          if (headerName.indexOf(text) % 2 === 1) {
            rowStyle = "row";
            marginStyleRight = 0;
          } else {
            marginStyleLeft = 0;
          }
          return (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "space-between" },
                flexDirection: { xs: "column", md: rowStyle },
                alignItems: "center",
                px: { xs: 0, md: 8 },
              }}
            >
              <Box
                sx={{
                  mr: { xs: 0, md: marginStyleRight },
                  ml: { xs: 0, md: marginStyleLeft },
                }}
              >
                <Typography
                  sx={{
                    color: "#FA4A0C",
                    fontWeight: "bold",
                    fontSize: "24px",
                    mt: 6,
                    px: { xs: 2, md: 0 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {text}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    my: { xs: 5, md: 0 },
                    px: { xs: 5, md: 0 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {topic[headerName.indexOf(text)]}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#999",
                    px: { xs: 10, md: 0 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {detail[headerName.indexOf(text)]}
                </Typography>
              </Box>
              <Box sx={{ alignSelf: "right" }}>
                {headerName.indexOf(text) === 0 ? (
                  <ImgInfo
                    src={imgInfo_1}
                    alt={`Img info${headerName.indexOf(text)}`}
                  />
                ) : null}
                {headerName.indexOf(text) === 1 ? (
                  <ImgInfo
                    src={imgInfo_2}
                    alt={`Img info${headerName.indexOf(text)}`}
                  />
                ) : null}
                {headerName.indexOf(text) === 2 ? (
                  <ImgInfo
                    src={imgInfo_3}
                    alt={`Img info${headerName.indexOf(text)}`}
                  />
                ) : null}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Info;
