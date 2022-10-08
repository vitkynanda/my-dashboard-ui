import { Box, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { glassStyle } from "../../../utils/style";

const DashboardLayout = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Stack direction="row" height="100%" p={2} spacing={!isOpen ? 0 : 2}>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Stack flexGrow={1} spacing={1.7} sx={{ overflow: "auto" }}>
        {/* Header Section */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              top: 0,
              ...glassStyle,
              position: "sticky",
              zIndex: 111,
              backgroundColor: "rgba(17, 25, 40, 0.65)",
              backdropFilter: "blur(1px) saturate(172%)",
              padding: 1,
            },
          })}
        >
          {!isOpen && (
            <Box
              onClick={() => setIsOpen(true)}
              sx={(theme) => ({
                ...glassStyle,
                zIndex: 999,
                p: 0.5,
                borderRadius: "100%",
                [theme.breakpoints.down("md")]: {
                  backgroundColor: "rgba(17, 25, 40, 0.4)",
                  p: 1,
                },
              })}
            >
              <IconButton>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
          )}
          <Header title={title} />
        </Stack>
        {/* Page UI */}
        {children}
      </Stack>
    </Stack>
  );
};

export default DashboardLayout;
