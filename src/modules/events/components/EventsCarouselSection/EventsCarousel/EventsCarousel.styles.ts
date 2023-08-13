import { SxProps } from "@mui/system";

export const useEventsCarouselStyles = () => {
  const wrapper: SxProps = {
    height: 1,
    "& .swiper": {
      height: 1
    },
    "& .swiper-slide": {
      width: "min-content !important"
    }
  };

  return {
    wrapper
  };
};
