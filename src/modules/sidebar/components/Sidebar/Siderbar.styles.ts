import { SxProps } from "@mui/system";

export const useSiderbarStyles = () => {
  const sidebarWrapper: SxProps = {
    position: "relative",
    height: 1,
    width: "240px",
    padding: "40px 16px",
    boxShadow: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)"
  };

  const userNameStyles: SxProps = {
    fontWeight: 600
  };

  const userEmailStyles: SxProps = {
    fontWeight: 600,
    color: "#667085"
  };

  const formControlStyles: SxProps = {
    width: "100%",
    maxHeight: "36px",
    border: "1px solid #D0D5DD",
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    borderRadius: "8px"
  };

  const textFieldStyles: SxProps = {
    maxHeight: "36px",
    color: "#344054",
    "& div": {
      maxHeight: "36px"
    }
  };

  const listItemStyles: SxProps = {
    padding: "0"
  }

  return {
    sidebarWrapper,
    formControlStyles,
    textFieldStyles,
    userNameStyles,
    userEmailStyles,
    listItemStyles
  };
};
