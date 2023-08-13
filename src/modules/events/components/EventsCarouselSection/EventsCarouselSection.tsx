import { Event } from "@modules/events/api/event.type";
import { Stack } from "@ui/atoms";
import { FC } from "react";

import { Pagination } from "@/basic/types/pagination.types";

import { EventsCarousel } from "./EventsCarousel";
import { EventsCarouselHeader } from "./EventsCarouselHeader";

const getData = async (): Promise<Pagination<Event>> => {
  const res = await fetch("http://localhost:8080/event?size=8&sort=creationDate,desc");

  return res.json() as Promise<Pagination<Event>>;
};

const EventsCarouselSection: FC = async () => {
  const events = await getData();

  return (
    <Stack overflow="hidden" direction="column">
      <EventsCarouselHeader />
      <EventsCarousel events={events.content} />
    </Stack>
  );
};

export default EventsCarouselSection;
