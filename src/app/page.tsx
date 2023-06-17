import "server-only";

import { EventsCalendar } from "@modules/events/components";
import { LatestProjectList } from "@modules/projects/components";
import { Box, Button, Skeleton, Stack, Typography } from "@ui/atoms";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Stack p="60px 5.5% 50px 3%">
      <Typography>Wydarzenia</Typography>
      <Stack direction="row" gap="32px">
        <EventsCalendar />
        <Box>
          <Stack>
            <Typography>Najbliższe wydarzenia</Typography>
            <Button>
              <Typography>Zobacz wszystkie</Typography>
            </Button>
          </Stack>
          <Box>
            <EventsCarousel />
          </Box>
        </Box>
      </Stack>
      <Typography pb="25px">Najnowsze projekty</Typography>
      <LatestProjectList />
    </Stack>
  );
};

export default Home;
