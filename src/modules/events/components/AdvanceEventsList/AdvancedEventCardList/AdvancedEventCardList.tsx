import { IEvent } from "@modules/events/api/event.type";
import { AdvancedEventCard } from "@modules/events/components/AdvanceEventsList/AdvancedEventCardList/AdvancedEventCard";
import { Stack } from "@ui/atoms";
import { FC } from "react";

import { Pagination } from "@/basic/types/pagination.types";

interface Props {
  events: Pagination<IEvent>;
}

const AdvancedEventCardList: FC<Props> = (props) => {
  const { events } = props;

  return (
    <Stack direction="row" flexWrap="wrap" gap="12px" pt="32px">
      {events.content.map((event) => (
        <AdvancedEventCard key={event.id} event={event} />
      ))}
    </Stack>
  );
};

export default AdvancedEventCardList;
