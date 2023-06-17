"use client";

import {
  TableContainer as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps
} from "@mui/material";
import { FC } from "react";

export type TableContainerProps = MuiTableContainerProps;

const TableContainer: FC<TableContainerProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiTableContainer {...rest}>{children}</MuiTableContainer>;
};

export default TableContainer;
