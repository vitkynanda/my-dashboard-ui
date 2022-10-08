import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const LayoutContainer = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(90deg, hsla(221, 45%, 73%, 1) 0%, hsla(220, 78%, 29%, 1) 100%)",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const GlassContainer = styled("div")(({ theme }) => ({
  backdropFilter: "blur(5px) saturate(172%)",
  backgroundColor: "rgba(255, 255, 255, 0.07)",
  borderRadius: "12px",
  border: "1px solid rgba(209, 213, 219, 0.3)",
  width: "calc(100% - 5%)",
  height: "calc(100% - 5%)",
}));

const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <GlassContainer>{children}</GlassContainer>
    </LayoutContainer>
  );
};

export default MainLayout;
