import { IEvent } from "@modules/events/api/event.type";
import { EventCard } from "@modules/events/components/EventCard";
import { Stack } from "@ui/atoms";
import { FC } from "react";

import { Pagination } from "@/basic/types/pagination.types";

import eventsMock from "./mock.json";

const getData = async (): Promise<Pagination<IEvent>> => {
  const res: Promise<Pagination<IEvent>> = new Promise((resolve) => {
    resolve(JSON.parse(JSON.stringify(eventsMock)) as Pagination<IEvent>);
  });

  return res;
};

const EventsCarousel: FC = async () => {
  const events = await getData();

  return (
    <Stack direction="row" gap="8px">
      {events.content.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </Stack>
  );
};

export default EventsCarousel;
