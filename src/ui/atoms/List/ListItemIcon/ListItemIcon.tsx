"use client";

import {
  ListItemIcon as MuiListItemIcon,
  ListItemIconProps as MuiListItemIconProps
} from "@mui/material";
import { FC } from "react";

export type ListItemIconProps = MuiListItemIconProps;

const ListItemIcon: FC<ListItemIconProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiListItemIcon {...rest}>{children}</MuiListItemIcon>;
};

export default ListItemIcon;
