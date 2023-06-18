"use client";

import { IEvent } from "@modules/events/api/event.type";
import { useAdvancedEventCardStyles } from "@modules/events/components/AdvanceEventsList/AdvancedEventCardList/AdvancedEventCard/AdvancedEventCard.styles";
import { dayjs } from "@services/dates";
import { Box, Skeleton, Stack, Typography } from "@ui/atoms";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  event: IEvent;
}

const AdvancedEventCard: FC<Props> = (props) => {
  const { event } = props;
  const router = useRouter();
  const { cardWrapper } = useAdvancedEventCardStyles();
  const mainOrgniazation = event?.organizationList?.find(
    (orgnization) => orgnization.id === event.mainOrganizationId
  );

  const handleRedirect = () => {
    router.push(`/events/${event.id}`);
  };

  return (
    <Stack width="250px" gap="12px" sx={cardWrapper} onClick={handleRedirect}>
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

export default AdvancedEventCard;
