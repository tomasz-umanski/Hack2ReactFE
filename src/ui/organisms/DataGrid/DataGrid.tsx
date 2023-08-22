"use client";

import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";

import { DataGridProps, GridValidRowModel } from "./DataGrid.types";

const DataGrid = <R extends GridValidRowModel>(props: DataGridProps<R>) => (
  <MuiDataGrid {...props} />
);

export default DataGrid;
