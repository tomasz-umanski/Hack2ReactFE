"use client";

import { TableRow as MuiTableRow, TableRowProps as MuiTableRowProps } from "@mui/material";
import { FC } from "react";

export type TableRowProps = MuiTableRowProps;

const TableRow: FC<TableRowProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiTableRow {...rest}>{children}</MuiTableRow>;
};

export default TableRow;
