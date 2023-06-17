import { SxProps } from "@mui/system";

export const useSidebarLayoutStyles = () => {
  const gridContainerStyles: SxProps = {
    minHeight: "100vh"
  };

  const gridItemStyles: SxProps = {
    width: "240px"
  };

  return {
    gridContainerStyles,
    gridItemStyles
  };
};
