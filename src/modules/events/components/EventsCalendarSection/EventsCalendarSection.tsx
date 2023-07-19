import { FC } from "react";

import { EventsCalendar, HighlightedDays } from "./EventsCalendar";

// TODO API na daty eventów
const getData = async (): Promise<HighlightedDays> => {
  const res: Promise<HighlightedDays> = new Promise((resolve) => {
    resolve(["2023.06.17", "2023.06.20", "2023.06.03", "2023.06.05"] as HighlightedDays);
  });

  return res;
};

const EventsCalendarSection: FC = async () => {
  const highlightedDays = await getData();

  return <EventsCalendar highlightedDays={highlightedDays} />;
};

export default EventsCalendarSection;
