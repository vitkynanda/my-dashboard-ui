import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { glassStyle } from "../../utils/style";
import MenuList from "./MenuList";

const SidebarContainer = styled("div")(({ theme, isOpen, setIsOpen }) => {
  return {
    ...glassStyle,
    backgroundColor: "rgba(12, 10, 60, 0.5)",
    border: isOpen ? glassStyle.border : "",
    padding: isOpen ? 10 : 0,
    width: isOpen ? 250 : 0,
    transition: "all 0.2s ease-out",
    [theme.breakpoints.down("md")]: {
      position: "absolute",
      height: "calc(100% - 35px)",
      zIndex: 999,
      width: isOpen ? 280 : 0,
      backgroundColor: "rgba(12, 10, 60, 1)",
    },
  };
});

const Sidebar = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (window.innerWidth < 600) setIsOpen(false);
  }, [setIsOpen]);

  return (
    <SidebarContainer isOpen={isOpen} setIsOpen={setIsOpen}>
      {isOpen && (
        <Stack spacing={1}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              background: "rgba(25, 10, 40, 0.3)",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.1 )",
              border: "1px solid rgba(255, 255, 255, 0.125)",
              p: 1,
              borderRadius: 2,
            }}
          >
            <Typography ml={1}>MyDashboard UI</Typography>
            <IconButton onClick={() => setIsOpen(false)}>
              <ArrowBackIosNewIcon sx={{ fontSize: 17 }} />
            </IconButton>
          </Box>
          <Divider />
          <MenuList setIsOpen={setIsOpen} />
        </Stack>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
