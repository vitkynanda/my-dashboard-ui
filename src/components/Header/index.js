import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { glassStyle } from "../../utils/style";
import AccountMenu from "./AccountMenu";

const HeaderContainer = styled("div")(({ theme }) => ({
  ...glassStyle,
  padding: "10px 15px",
  width: "100%",
  height: 60,
  display: "flex",
  alignItems: "center",
  boxShadow: "0 8px 32px 0 rgba( 125, 125, 125, 0.3 )",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: { backgroundColor: "rgba(17, 25, 40, 0.4)" },
}));

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <Typography
        sx={(theme) => ({ [theme.breakpoints.up("md")]: { fontSize: 20 } })}
      >
        {title || "Header"}
      </Typography>
      <AccountMenu />
    </HeaderContainer>
  );
};

export default Header;
