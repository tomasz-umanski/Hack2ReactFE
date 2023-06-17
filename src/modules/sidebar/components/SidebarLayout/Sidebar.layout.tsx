import { Sidebar } from "@modules/sidebar/components";
import { Grid } from "@ui/atoms";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SidebarLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <Grid container columns={12} minHeight="100vh">
      <Grid item xs="240px">
        <Sidebar />
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default SidebarLayout;
