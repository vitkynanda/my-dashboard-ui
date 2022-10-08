import {
  MenuList as MUIMenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../../routes";

const MenuList = ({ setIsOpen }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <MUIMenuList>
      {routes.map((route) => (
        <MenuItem
          key={route.title}
          selected={pathname === route.path}
          onClick={() => {
            if (window.innerWidth < 600) setIsOpen(false);
            navigate(route.path);
          }}
          sx={{
            p: 2,
            px: 1,
            borderRadius: "12px",
            "&:hover": {
              transition: "all 0.1s ease-in-out",
              backgroundColor: "rgba(10, 10, 50, 0.2)",
            },
          }}
        >
          <ListItemIcon>{route.icon}</ListItemIcon>
          <ListItemText>{route.title}</ListItemText>
        </MenuItem>
      ))}
    </MUIMenuList>
  );
};

export default MenuList;
