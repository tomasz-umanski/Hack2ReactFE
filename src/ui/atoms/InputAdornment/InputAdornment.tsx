"use client";

import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps
} from "@mui/material";
import { FC } from "react";

export type InputAdornmentProps = MuiInputAdornmentProps;

const InputAdornment: FC<InputAdornmentProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiInputAdornment {...rest}>{children}</MuiInputAdornment>;
};

export default InputAdornment;
