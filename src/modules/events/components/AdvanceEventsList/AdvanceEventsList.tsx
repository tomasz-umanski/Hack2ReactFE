import { Event } from "@modules/events/api/event.type";
import { AdvancedEventCardList } from "@modules/events/components/AdvanceEventsList/AdvancedEventCardList";
import { AdvancedFilterBar } from "@modules/events/components/AdvanceEventsList/AdvancedFilterBar";
import { Stack } from "@ui/atoms";
import { headers } from "next/headers";
import { FC } from "react";

import { Pagination } from "@/basic/types/pagination.types";

const getData = async (): Promise<Pagination<Event>> => {
  const requestHeaders = headers();
  const paramsString =
    requestHeaders.get("referer") &&
    new URL(requestHeaders.get("referer")?.toString() || "").searchParams.toString();

  const url = `http://localhost:8080/event${paramsString ? `?${paramsString}` : ""}`;
  const res = await fetch(url);
  return res.json() as Promise<Pagination<Event>>;
};

const AdvanceEventsList: FC = async () => {
  const events = await getData();

  return (
    <Stack>
      <AdvancedFilterBar />
      <AdvancedEventCardList events={events} />
    </Stack>
  );
};

export default AdvanceEventsList;
