import { Sidebar } from "@modules/sidebar/components";
import { useSidebarLayoutStyles } from "@modules/sidebar/components/SidebarLayout/SidebarLayout.styles";
import { Grid } from "@ui/atoms";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SidebarLayout: FC<Props> = (props) => {
  const { children } = props;
  const { gridContainerStyles } = useSidebarLayoutStyles();

  return (
    <Grid container sx={gridContainerStyles} wrap="nowrap" spacing={7} pr={11}>
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10} mt={9} mb={8}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SidebarLayout;
