"use client";

import "swiper/css";
import "swiper/css/free-mode";

import { FC } from "react";
import { Swiper as SwiperCarousel } from "swiper/react";
import type { SwiperProps } from "swiper/swiper-react";

const Swiper: FC<SwiperProps> = (props) => {
  const { children, ...rest } = props;
  return <SwiperCarousel {...rest}>{children}</SwiperCarousel>;
};

export default Swiper;
