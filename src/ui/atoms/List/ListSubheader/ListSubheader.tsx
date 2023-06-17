"use client";

import {
  ListSubheader as MuiListSubheader,
  ListSubheaderProps as MuiListSubheaderProps
} from "@mui/material";
import { FC } from "react";

export type ListSubheaderProps = MuiListSubheaderProps;

const ListSubheader: FC<ListSubheaderProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiListSubheader {...rest}>{children}</MuiListSubheader>;
};

export default ListSubheader;
