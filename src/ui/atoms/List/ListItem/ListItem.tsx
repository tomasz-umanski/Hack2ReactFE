"use client";

import { ListItem as MuiListItem, ListItemProps as MuiListItemProps } from "@mui/material";
import { FC } from "react";

export type ListItemProps = MuiListItemProps;

const ListItem: FC<ListItemProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiListItem {...rest}>{children}</MuiListItem>;
};

export default ListItem;
