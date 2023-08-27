import "server-only";

import { Announcement } from "@modules/annoucement/components";
import { EventsCalendarSection } from "@modules/events/components";
import { EventsCarouselSection } from "@modules/events/components/EventsCarouselSection";
import { LatestProjectsSection } from "@modules/projects/components/LatestProjectsSection";
import { Box, Grid, Skeleton, Typography } from "@ui/atoms";
import { useTranslations } from "next-intl";
import { FC } from "react";

const Home: FC = () => {
  const t = useTranslations("homePage");

  return (
    <Box>
      <Box mb={5}>
        <Typography variant="medium_sm">{t("eventsHeader")}</Typography>
      </Box>
      <Grid
        display="grid"
        container
        gridTemplateColumns="1.2fr 1fr 1.8fr repeat(2, 1fr)"
        gridTemplateRows="repeat(2, 1fr) 0.5fr repeat(3, 1fr)"
        columnGap={6}
        rowGap={3}
      >
        <Grid item gridArea="1 / 1 / 3 / 2" border="1px solid black">
          <EventsCalendarSection />
        </Grid>
        <Grid item gridArea="1 / 2 / 3 / 6" border="1px solid black">
          <EventsCarouselSection />
        </Grid>
        <Grid item gridArea="3 / 1 / 4 / 4" border="1px solid black">
          <Announcement />
        </Grid>
        <Grid item gridArea="3 / 4 / 7 / 6" border="1px solid black">
          <Skeleton animation="wave" height={600} width="100%" variant="rectangular" />
        </Grid>
        <Grid item gridArea="4 / 1 / 7 / 4" border="1px solid black">
          <LatestProjectsSection />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
