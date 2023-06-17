"use client";

import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { FC } from "react";
export type TextFieldProps = MuiTextFieldProps;

const TextField: FC<TextFieldProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiTextField {...rest}>{children}</MuiTextField>;
};

export default TextField;
