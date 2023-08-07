import { Box, Button, Stack, Typography } from "@ui/atoms";
import { useTranslations } from "next-intl";
import { FC } from "react";

import { EventsCarousel } from "./EventsCarousel";

const EventsCarouselSection: FC = () => {
  const t = useTranslations("events");

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="medium_xs">{t("upcomingEvents")}</Typography>
        <Button>
          <Typography variant="semibold_text_sm">{t("seeAllEvents")}</Typography>
        </Button>
      </Stack>
      <Box>
        <EventsCarousel />
      </Box>
    </Box>
  );
};

export default EventsCarouselSection;
