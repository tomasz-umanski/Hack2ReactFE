import "server-only";

import { Announcement } from "@modules/annoucement/components";
import { EventsCalendar, EventsCarousel } from "@modules/events/components";
import { LatestProjectList } from "@modules/projects/components";
import { Box, Button, Skeleton, Stack, Typography } from "@ui/atoms";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Stack>
      <Typography>Wydarzenia</Typography>
      <Stack
        direction="row"
        gap="32px"
        justifyContent="flex-start"
        alignContent="flex-start"
        mb="15px"
      >
        <Box width="328px">
          <EventsCalendar />
        </Box>
        <Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
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
