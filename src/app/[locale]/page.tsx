import "server-only";

import { Announcement } from "@modules/annoucement/components";
import { EventsCalendarSection } from "@modules/events/components";
import { EventsCarouselSection } from "@modules/events/components/EventsCarouselSection";
import { LatestProjectList } from "@modules/projects/components";
import { Box, Button, Skeleton, Stack, Typography } from "@ui/atoms";
import { useTranslations } from "next-intl";
import { FC } from "react";

const Home: FC = () => {
  const t = useTranslations("homePage");

  return (
    <Stack>
      <Typography variant="medium_sm">{t("eventsHeader")}</Typography>
      <Stack
        direction="row"
        gap="32px"
        justifyContent="flex-start"
        alignContent="flex-start"
        mb={5}
        mt={4}
      >
        <EventsCalendarSection />
        <EventsCarouselSection />
      </Stack>
      <Stack direction="row" gap="52px">
        <Box>
          <Announcement />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt="16px"
            mb="30px"
          >
            <Typography>Najnowsze projekty</Typography>
            <Button>
              <Typography>Zobacz wszystkie</Typography>
            </Button>
          </Stack>
          <LatestProjectList />
        </Box>
        <Box>
          <Skeleton animation="wave" height={600} width={468} variant="rectangular" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Home;
