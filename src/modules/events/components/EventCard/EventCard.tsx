import { IEvent } from "@modules/events/api/event.type";
import { dayjs } from "@services/dates";
import { Box, Skeleton, Stack, Typography } from "@ui/atoms";
import { FC } from "react";
import { useEventCardStyles } from "@modules/events/components/EventCard/EventCard.styles";

interface Props {
  event: IEvent;
}

const EventCard: FC<Props> = (props) => {
  const { event } = props;
  const { cardWrapper } = useEventCardStyles();
  const mainOrgniazation = event.organizationList.find(
    (orgnization) => orgnization.id === event.mainOrganizationId
  );

  return (
    <Stack width="250px" gap="12px" sx={cardWrapper}>
      <Skeleton animation="wave" height={80} width={200} variant="rectangular" />
      <Box>
        <Stack direction="row" gap="5px" alignItems="center" width="250px">
          <Skeleton animation="wave" height={15} width={12} variant="rectangular" />
          <Typography>{event.localization}</Typography>
        </Stack>
        <Box>
          <Typography>{dayjs(event.startDate).format("DD.MM.YYYY")}</Typography>
          <Typography mb="auto">{event.title}</Typography>
          <Typography>{mainOrgniazation?.name || ""}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default EventCard;
