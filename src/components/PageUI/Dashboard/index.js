import styled from "@emotion/styled";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { cardData } from "../../../dummy";
import { LineChart } from "../../Chart";
import DashboardCard from "./DashboardCard";
import Information from "./Information";

const CardContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(259px, 1fr))",
  gap: 10,
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const Dashboard = () => {
  const [stackDirection, setStackDirection] = useState("row");
  const screenWidth = window.innerWidth;
  useEffect(() => {
    if (screenWidth < 600) setStackDirection("column");
  }, [screenWidth, setStackDirection]);

  return (
    <Box>
      <Divider />
      {/* Card Element */}
      <Stack mt={2} direction={stackDirection}>
        <Box>
          <CardContainer>
            {cardData.map((card, id) => (
              <DashboardCard key={id} {...card} />
            ))}
          </CardContainer>
          <Box mt={2}>
            <Typography mb={1}>Data Statistics Of The Year</Typography>
            <Divider />
            <LineChart title="Sales" />
          </Box>
        </Box>
        {/* Information section */}
        <Information />
      </Stack>
    </Box>
  );
};

export default Dashboard;
