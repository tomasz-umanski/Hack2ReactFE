import { SxProps } from "@mui/system";

export const useAnnouncementStyles = () => {
  const wrapperStyles: SxProps = {
    padding: "16px 24px",
    background: "#ECF4FA",
    border: "1px solid #C2D6E0",
    boxShadow: "0px 1px 4px rgba(16, 24, 40, 0.1)",
    borderRadius: "12px"
  };

  return {
    wrapperStyles
  };
};
