import { IEvent } from "@modules/events/api/event.type";
import { EventCard } from "@modules/events/components/EventCard";
import { FC } from "react";
import { Carousel } from "react-responsive-carousel";

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
    <Carousel>
      {events.content.map((event) => (
        <EventCard event={event} />
      ))}
    </Carousel>
  );
};

export default EventsCarousel;
