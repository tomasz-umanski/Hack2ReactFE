import { Box, Button, Skeleton, Stack, Typography } from "@ui/atoms";
import { useTranslations } from "next-intl";
import { FC } from "react";

import { useAnnouncementStyles } from "./Announcement.styles";

/* TODO BE Announcement */
const Announcement: FC = () => {
  const t = useTranslations("announcement");
  const { wrapperStyles } = useAnnouncementStyles();
  return (
    <Stack sx={wrapperStyles} direction="row" alignItems="center">
      {/* TODO Ikonka */}
      <Skeleton animation="wave" height={40} width={40} variant="rounded" />
      <Stack>
        <Typography variant="semibold_text_lg">
          Warsztaty z pisania wniosków projektowych
        </Typography>
        <Typography variant="regular_text_sm">
          Zapraszamy wszystkie organizacje pozarządowe na warsztaty z pisania wniosków projektowych!
          Szczegóły na stronie www.
        </Typography>
      </Stack>
      <Box width="200px">
        <Button>
          <Typography variant="semibold_text_sm">{t("seeMore")}</Typography>
        </Button>
      </Box>
    </Stack>
  );
};

export default Announcement;
