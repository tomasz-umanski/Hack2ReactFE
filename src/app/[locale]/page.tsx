import "server-only";

import { Announcement } from "@modules/annoucement/components";
import { EventsCalendarSection } from "@modules/events/components";
import { EventsCarouselSection } from "@modules/events/components/EventsCarouselSection";
import { LatestProjectsSection } from "@modules/projects/components/LatestProjectsSection";
import { Box, Skeleton, Stack, Typography } from "@ui/atoms";
import { useTranslations } from "next-intl";
import { FC } from "react";

const Home: FC = () => {
  const t = useTranslations("homePage");

  return (
    <Stack>
      <Typography variant="medium_sm">{t("eventsHeader")}</Typography>
      <Stack direction="row" gap={6} mb={3} mt={5}>
        <EventsCalendarSection />
        <EventsCarouselSection />
      </Stack>
      <Stack direction="row" gap={8}>
        <Box>
          <Announcement />
          <LatestProjectsSection />
        </Box>
        <Box>
          <Skeleton animation="wave" height={600} width={468} variant="rectangular" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Home;
