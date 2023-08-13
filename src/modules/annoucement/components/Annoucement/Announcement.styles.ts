import { SxProps } from "@mui/system";

export const useAnnouncementStyles = () => {
  const wrapperStyles: SxProps = {
    paddingY: 3,
    paddingX: 5,
    background: "#ECF4FA",
    border: "1px solid #C2D6E0",
    boxShadow: "0px 1px 4px rgba(16, 24, 40, 0.1)",
    borderRadius: 3,
    gap: 4
  };

  return {
    wrapperStyles
  };
};
