"use client";

import { Collapse as MuiCollapse, CollapseProps as MuiCollapseProps } from "@mui/material";
import { FC } from "react";

export type CollapseProps = MuiCollapseProps;

const Collapse: FC<CollapseProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiCollapse {...rest}>{children}</MuiCollapse>;
};

export default Collapse;
