"use client";

import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps } from "@mui/material";
import { FC } from "react";

export type MenuItemProps = MuiMenuItemProps;

const MenuItem: FC<MenuItemProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiMenuItem {...rest}>{children}</MuiMenuItem>;
};
export default MenuItem;
