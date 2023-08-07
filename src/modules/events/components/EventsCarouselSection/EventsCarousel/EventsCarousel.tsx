import { IEvent } from "@modules/events/api/event.type";
import { EventCard } from "@modules/events/components/EventCard";
import { Stack } from "@ui/atoms";
import { FC } from "react";

import { Pagination } from "@/basic/types/pagination.types";

const getData = async (): Promise<Pagination<IEvent>> => {
  const res = await fetch("http://localhost:8080/event?size=4&sort=creationDate,desc");

  return res.json() as Promise<Pagination<IEvent>>;
};

const EventsCarousel: FC = async () => {
  const events = await getData();

  return (
    <Stack direction="row" gap="8px" height={1}>
      {events.content.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Stack>
  );
};

export default EventsCarousel;
