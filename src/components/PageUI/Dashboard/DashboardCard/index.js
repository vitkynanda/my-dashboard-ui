import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { glassStyle } from "../../../../utils/style";

import CircularProgressWithLabel from "../ProgressWithLabel";

const DashboardCard = (props) => {
  return (
    <Card
      sx={{
        ...glassStyle,
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.2 )",
        px: 1.5,
        py: 1,
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: "rgba(12, 10, 60, 0.5)",
          cursor: "pointer",
        },
      }}
    >
      <Box display="flex" alignItems="center">
        <CircularProgressWithLabel {...props} />
        <Typography fontSize={15} ml={2}>
          {props.title}
        </Typography>
      </Box>
      <Typography fontSize={24} textAlign="right" fontWeight={600}>
        $ {props.value.toLocaleString("id-ID")}
      </Typography>
      <Typography mt={2} fontSize={12}>
        Last Update: 10/12/2022
      </Typography>
    </Card>
  );
};

export default DashboardCard;
