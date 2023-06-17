"use client";

import { TableHead as MuiTableHead, TableHeadProps as MuiTableHeadProps } from "@mui/material";
import { FC } from "react";

export type TableHeadProps = MuiTableHeadProps;

const TableHead: FC<TableHeadProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiTableHead {...rest}>{children}</MuiTableHead>;
};

export default TableHead;
