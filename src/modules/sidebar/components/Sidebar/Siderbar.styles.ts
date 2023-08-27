import { SxProps, SystemCssProperties } from "@mui/system";
import { useTheme } from "@ui/theme";

export const useSiderbarStyles = () => {
  const { colors } = useTheme();

  const sidebarContainer: SystemCssProperties = {
    minWidth: "240px",
    background: colors.PRIMARY_500,
    minHeight: "100vh"
  };

  const sidebarFixedContainer: SxProps = {
    ...sidebarContainer,
    position: "fixed",
    top: 0,
    left: 0,
    paddingY: 7,
    paddingX: 3
  };

  const formControlStyles: SxProps = {
    width: "100%",
    maxHeight: "36px",
    border: "1px solid #D0D5DD",
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    borderRadius: 2
  };

  const textFieldStyles: SxProps = {
    maxHeight: "36px",
    "& div": {
      maxHeight: "36px"
    }
  };

  const listItemStyles: SxProps = {
    padding: 0
  };

  return {
    sidebarContainer,
    sidebarFixedContainer,
    formControlStyles,
    textFieldStyles,
    listItemStyles
  };
};
