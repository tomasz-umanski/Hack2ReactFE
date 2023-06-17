import MuiLayout from "@app/mui.layout";
import SidebarLayout from "@modules/sidebar/components/SidebarLayout/SidebarLayout";
import { Box } from "@ui/atoms";
import React, { FC, ReactNode } from "react";

export const metadata = {
  title: "hack2react",
  description: "hacks squad"
};

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = (props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <React.StrictMode>
          <Box sx={{ minHeight: "100vh" }}>
            <MuiLayout>
              <SidebarLayout>{children}</SidebarLayout>
            </MuiLayout>
          </Box>
        </React.StrictMode>
      </body>
    </html>
  );
};

export default RootLayout;
