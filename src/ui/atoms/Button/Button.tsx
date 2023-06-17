"use client";

import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { FC } from "react";

export type ButtonProps = MuiButtonProps;

const Button: FC<ButtonProps> = (props) => <MuiButton {...props} />;

export default Button;
