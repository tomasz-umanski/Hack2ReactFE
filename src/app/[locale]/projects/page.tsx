import { AdvanceProjectsList } from "@modules/projects/components";
import { Button, Stack, Typography } from "@ui/atoms";
import { FC } from "react";

const ProjectsPage: FC = () => {
  return (
    <Stack gap="20px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>Projekty</Typography>
        <Button>Dodaj projekt</Button>
      </Stack>
      <AdvanceProjectsList />
    </Stack>
  );
};

export default ProjectsPage;
