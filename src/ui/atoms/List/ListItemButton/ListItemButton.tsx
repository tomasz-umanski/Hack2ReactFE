"use client";

import {
  ListItemButton as MuiListItemButton,
  ListItemButtonProps as MuiListItemButtonProps
} from "@mui/material";
import { FC } from "react";

export type ListItemButtonProps = MuiListItemButtonProps;

const ListItemButton: FC<ListItemButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiListItemButton {...rest}>{children}</MuiListItemButton>;
};

export default ListItemButton;
