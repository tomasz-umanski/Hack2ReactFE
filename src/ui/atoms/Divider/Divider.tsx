"use client";

import { Divider as MuiDivider, DividerProps as MuiDividerProps } from "@mui/material";
import { FC } from "react";

export type DividerProps = MuiDividerProps;

const Divider: FC<DividerProps> = (props) => <MuiDivider {...props} />;

export default Divider;
