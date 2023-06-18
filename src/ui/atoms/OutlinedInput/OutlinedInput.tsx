"use client";

import {
  OutlinedInput as MuiOutlinedInput,
  OutlinedInputProps as MuiOutlinedInputProps
} from "@mui/material";
import { FC } from "react";

export type OutlinedInputProps = MuiOutlinedInputProps;

const OutlinedInput: FC<OutlinedInputProps> = (props) => <MuiOutlinedInput {...props} />;

export default OutlinedInput;
