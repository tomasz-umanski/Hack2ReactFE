import { IEvent } from "@modules/events/api/event.type";
import { Box, Skeleton, Stack, Typography } from "@ui/atoms";
import { FC } from "react";

interface Props {
  event: IEvent;
}

const EventCard: FC<Props> = (props) => {
  const { event } = props;
  const mainOrgniazation = event.organizationList.find(
    (orgnization) => orgnization.id === event.mainOrganizationId
  );

  return (
    <Box>
      <Skeleton animation="wave" height={80} width={202} variant="rectangular" />
      <Stack>
        <Skeleton animation="wave" height={15} width={12} variant="rectangular" />
        <Typography>{event.localization}</Typography>
      </Stack>
      <Typography>{event.title}</Typography>
      <Typography>{mainOrgniazation.name}</Typography>
    </Box>
  );
};

export default EventCard;
