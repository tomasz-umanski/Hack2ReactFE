"use client";

import { Chip as MuiChip, ChipProps as MuiChipProps } from "@mui/material";
import { FC } from "react";

export type ChipProps = MuiChipProps;

const Chip: FC<ChipProps> = (props) => {
  return <MuiChip {...props} />;
};

export default Chip;
