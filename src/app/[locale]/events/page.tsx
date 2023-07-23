import { AdvanceEventsList } from "@modules/events/components/AdvanceEventsList";
import { Button, Stack, Typography } from "@ui/atoms";
import { FC } from "react";

const ProjectsPage: FC = () => {
  return (
    <Stack gap="20px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>Eventy</Typography>
        <Button>Dodaj event</Button>
      </Stack>
      <AdvanceEventsList />
    </Stack>
  );
};

export default ProjectsPage;
