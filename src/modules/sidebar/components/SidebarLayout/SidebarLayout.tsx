import { Sidebar } from "@modules/sidebar/components";
import { Box, Stack } from "@ui/atoms";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SidebarLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <Stack direction="row" gap={7} pr={11}>
      <Sidebar />
      <Box mt={9} mb={8}>
        {children}
      </Box>
    </Stack>
  );
};

export default SidebarLayout;
