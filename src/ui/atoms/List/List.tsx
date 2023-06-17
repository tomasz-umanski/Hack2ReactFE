"use client";

import { List as MuiList, ListProps as MuiListProps } from "@mui/material";
import { FC } from "react";

export type ListProps = MuiListProps;

const List: FC<ListProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiList {...rest}>{children}</MuiList>;
};

export default List;
