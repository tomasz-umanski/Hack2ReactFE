"use client";

import {
  TablePagination as MuiTablePagination,
  TablePaginationProps as MuiTablePaginationProps
} from "@mui/material";
import { FC } from "react";

export type TablePaginationProps = MuiTablePaginationProps;

const TablePagination: FC<TablePaginationProps> = (props) => {
  return <MuiTablePagination {...props} />;
};

export default TablePagination;
