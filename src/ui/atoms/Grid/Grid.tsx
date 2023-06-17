"use client";

import { Grid as MuiGrid, GridProps as MuiGridProps } from "@mui/material";
import { FC } from "react";

export type GridProps = MuiGridProps;

const Grid: FC<GridProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiGrid {...rest}>{children}</MuiGrid>;
};

export default Grid;
