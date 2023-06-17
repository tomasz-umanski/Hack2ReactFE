"use client";

import { TableBody as MuiTableBody, TableBodyProps as MuiTableBodyProps } from "@mui/material";
import { FC } from "react";

export type TableBodyProps = MuiTableBodyProps;

const TableBody: FC<TableBodyProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiTableBody {...rest}>{children}</MuiTableBody>;
};

export default TableBody;
