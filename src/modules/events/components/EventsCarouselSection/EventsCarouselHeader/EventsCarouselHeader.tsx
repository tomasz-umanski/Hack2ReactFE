import { Button, Stack, Typography } from "@ui/atoms";
import { useTranslations } from "next-intl";
import { FC } from "react";

const EventsCarouselHeader: FC = () => {
  const t = useTranslations("events");

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4} width={1}>
      <Typography variant="medium_xs">{t("upcomingEvents")}</Typography>
      <Button>
        <Typography variant="semibold_text_sm">{t("seeAllEvents")}</Typography>
      </Button>
    </Stack>
  );
};

export default EventsCarouselHeader;
