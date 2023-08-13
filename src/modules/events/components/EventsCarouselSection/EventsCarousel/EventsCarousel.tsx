"use client";

import { Event } from "@modules/events/api/event.type";
import { EventCard } from "@modules/events/components/EventCard";
import { useEventsCarouselStyles } from "@modules/events/components/EventsCarouselSection/EventsCarousel/EventsCarousel.styles";
import { Box } from "@ui/atoms";
import { Swiper, SwiperSlide } from "@ui/organisms";
import { FC } from "react";
import { FreeMode } from "swiper/modules";

interface Props {
  events: Event[];
}

const EventsCarousel: FC<Props> = (props) => {
  const { events } = props;
  const { wrapper } = useEventsCarouselStyles();

  return (
    <Box sx={wrapper}>
      <Swiper slidesPerView={4} spaceBetween="8px" freeMode modules={[FreeMode]}>
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default EventsCarousel;
