"use client";

import type { BoxProps as MuiBoxProps } from "@mui/material";
import { Box as MuiBox } from "@mui/material";
import { FC, forwardRef } from "react";

export type BoxProps = MuiBoxProps;

const Box: FC<BoxProps> = forwardRef((props, ref) => {
  const { children, ...rest } = props;

  return (
    <MuiBox {...rest} ref={ref}>
      {children}
    </MuiBox>
  );
});

Box.displayName = "Box";

export default Box;
