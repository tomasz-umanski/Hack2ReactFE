"use client";

import { Table as MuiTable, TableProps as MuiTableProps } from "@mui/material";
import { FC } from "react";

export type TableProps = MuiTableProps;

const Table: FC<TableProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiTable {...rest}>{children}</MuiTable>;
};

export default Table;
