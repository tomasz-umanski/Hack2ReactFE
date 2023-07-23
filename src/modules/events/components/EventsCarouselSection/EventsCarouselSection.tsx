import { Box, Button, Stack, Typography } from "@ui/atoms";
import { useTranslations } from "next-intl";
import { FC } from "react";

import { EventsCarousel } from "./EventsCarousel";

const EventsCarouselSection: FC = () => {
  const t = useTranslations("events");

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>{t("upcomingEvents")}</Typography>
        <Button>
          <Typography>{t("seeAllEvents")}</Typography>
        </Button>
      </Stack>
      <Box>
        <EventsCarousel />
      </Box>
    </Box>
  );
};

export default EventsCarouselSection;
