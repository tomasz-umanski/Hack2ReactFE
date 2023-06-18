import { useAnnouncementStyles } from "@modules/annoucement/components/Annoucement/Announcement.styles";
import { Box, Button, Skeleton, Stack, Typography } from "@ui/atoms";
import { FC } from "react";

const Announcement: FC = () => {
  const { wrapperStyles } = useAnnouncementStyles();
  return (
    <Stack sx={wrapperStyles} direction="row" gap="20px" alignItems="center">
      <Skeleton animation="wave" height={40} width={40} variant="rounded" />
      <Stack>
        <Typography>Warsztaty z pisania wniosków projektowych</Typography>
        <Typography fontSize="14px">
          Zapraszamy wszystkie organizacje pozarządowe na warsztaty z pisania wniosków projektowych!
          Szczegóły na stronie www.
        </Typography>
      </Stack>
      <Box width="200px">
        <Button>Zobacz więcej</Button>
      </Box>
    </Stack>
  );
};

export default Announcement;
