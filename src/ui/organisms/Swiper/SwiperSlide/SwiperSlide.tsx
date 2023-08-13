"use client";

import { FC } from "react";
import type { SwiperSlideProps } from "swiper/react";
import { SwiperSlide as SwiperCarouselSlide } from "swiper/react";

const SwiperSlide: FC<SwiperSlideProps> = (props) => {
  return <SwiperCarouselSlide {...props} />;
};

SwiperSlide.displayName = "SwiperSlide";

export default SwiperSlide;
