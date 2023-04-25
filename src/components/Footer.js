import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          height: "60px",
          width: "100%",
          background: "#4B4B4B",
          marginBottom:"0px",
          marginTop: "27.3%"
        }}
      >
        <Typography
          color="white"
          fontWeight="bold"
          align="center"
          mt={8}
          pt={2}
        >
          Made with ❤️ 
        </Typography>
      </Box>
    </>
  );
};

export default Footer;