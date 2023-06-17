"use client";

import {
  FormControl as MuiFormControl,
  FormControlProps as MuiFormControlProps
} from "@mui/material";
import { FC } from "react";

export type FormControlProps = MuiFormControlProps;

const FormControl: FC<FormControlProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiFormControl {...rest}>{children}</MuiFormControl>;
};

export default FormControl;
