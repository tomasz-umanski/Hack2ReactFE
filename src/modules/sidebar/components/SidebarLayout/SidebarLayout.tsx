import { Sidebar } from "@modules/sidebar/components";
import { useSidebarLayoutStyles } from "@modules/sidebar/components/SidebarLayout/SidebarLayout.styles";
import { Grid } from "@ui/atoms";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SidebarLayout: FC<Props> = (props) => {
  const { children } = props;
  const { gridContainerStyles, gridItemStyles } = useSidebarLayoutStyles();

  return (
    <Grid container sx={gridContainerStyles} wrap="nowrap">
      <Grid item sx={gridItemStyles}>
        <Sidebar />
      </Grid>
      <Grid item width="100%" p="60px 5.5% 50px 3%">
        {children}
      </Grid>
    </Grid>
  );
};

export default SidebarLayout;
