"use client";

import { TableCell as MuiTableCell, TableCellProps as MuiTableCellProps } from "@mui/material";
import { FC } from "react";

export type TableCellProps = MuiTableCellProps;

const TableCell: FC<TableCellProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiTableCell {...rest}>{children}</MuiTableCell>;
};

export default TableCell;
