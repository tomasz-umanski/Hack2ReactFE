"use client";

import {
  ListItemText as MuiListItemText,
  ListItemTextProps as MuiListItemTextProps
} from "@mui/material";
import { FC } from "react";

export type ListItemTextProps = MuiListItemTextProps;

const ListItemText: FC<ListItemTextProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiListItemText {...rest}>{children}</MuiListItemText>;
};

export default ListItemText;
