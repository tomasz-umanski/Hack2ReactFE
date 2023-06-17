"use client";

import { Paper as MuiPaper, PaperProps as MuiPaperProps } from "@mui/material";
import { FC } from "react";

export type PaperProps = MuiPaperProps;

const Paper: FC<PaperProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiPaper {...rest}>{children}</MuiPaper>;
};

export default Paper;
