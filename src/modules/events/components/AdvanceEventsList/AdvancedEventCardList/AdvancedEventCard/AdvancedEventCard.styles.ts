import { SxProps } from "@mui/system";

export const useAdvancedEventCardStyles = () => {
  const cardWrapper: SxProps = {
    border: "1px solid #EAECF0",
    width: "250px",
    height: "400px",
    padding: "20px 24px",
    borderRadius: "8px"
  };

  return {
    cardWrapper
  };
};
