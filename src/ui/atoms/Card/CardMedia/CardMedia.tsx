"use client";

import { CardMedia as MuiCardMedia, CardMediaProps as MuiCardMediaProps } from "@mui/material";
import { FC } from "react";

export type CardMediaProps = MuiCardMediaProps;

const CardMedia: FC<CardMediaProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiCardMedia {...rest}>{children}</MuiCardMedia>;
};

export default CardMedia;
