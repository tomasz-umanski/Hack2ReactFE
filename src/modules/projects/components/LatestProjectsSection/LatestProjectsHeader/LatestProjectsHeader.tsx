import { Button, Stack, Typography } from "@ui/atoms";
import { useTranslations } from "next-intl";
import { FC } from "react";

const LatestProjectsHeader: FC = () => {
  const t = useTranslations("projects");

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3} mb={3}>
      <Typography variant="medium_sm">{t("latest")}</Typography>
      <Button>
        <Typography variant="semibold_text_sm">{t("seeAll")}</Typography>
      </Button>
    </Stack>
  );
};

export default LatestProjectsHeader;
