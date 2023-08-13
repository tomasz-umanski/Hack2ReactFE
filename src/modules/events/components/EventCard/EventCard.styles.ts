import { SxProps } from "@mui/system";

export const useEventCardStyles = () => {
  const cardWrapper: SxProps = {
    border: "1px solid #EAECF0",
    width: "250px",
    height: 1,
    paddingY: 4,
    paddingX: 5,
    borderRadius: 2,
    gap: 3
  };

  return {
    cardWrapper
  };
};
