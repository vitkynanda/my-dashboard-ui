import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { glassStyle } from "../../../../utils/style";

const Information = () => {
  return (
    <Box
      sx={(theme) => ({
        ...glassStyle,
        margin: "0 1rem",
        width: "100%",
        [theme.breakpoints.down("md")]: { margin: 0 },
        p: 1.5,
      })}
    >
      <Typography fontSize={20} mb={1}>
        Information
      </Typography>
      <Divider />
      <Box></Box>
    </Box>
  );
};

export default Information;
