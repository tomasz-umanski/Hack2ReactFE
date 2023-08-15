import { Event } from "@modules/events/api/event.type";
import { dayjs } from "@services/dates";
import { Box, Skeleton, Stack, Typography } from "@ui/atoms";
import { FC } from "react";

import { useEventCardStyles } from "./EventCard.styles";

interface Props {
  event: Event;
}

const EventCard: FC<Props> = (props) => {
  const { event } = props;
  const { cardWrapper } = useEventCardStyles();
  const mainOrganization = event.organizationList.find(
    (organization) => organization.id === event.mainOrganizationId
  );

  /* TODO router */
  return (
    <Stack sx={cardWrapper}>
      <Skeleton animation="wave" height={80} width={200} variant="rectangular" />
      <Box>
        <Stack direction="row" gap={1} alignItems="center">
          <Skeleton animation="wave" height={15} width={12} variant="rectangular" />
          <Typography variant="medium_text_sm">{event.localization}</Typography>
        </Stack>
        <Box>
          <Typography variant="medium_text_sm">
            {dayjs(event.startDate).format("DD.MM.YYYY")}
          </Typography>
          <Typography variant="medium_text_md" mb="auto">
            {event.title}
          </Typography>
          <Typography variant="medium_text_sm">{mainOrganization?.name || ""}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default EventCard;
