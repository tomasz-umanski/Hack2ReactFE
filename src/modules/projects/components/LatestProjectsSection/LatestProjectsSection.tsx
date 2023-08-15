import { Button, Stack, Typography } from "@ui/atoms";
import { useTranslations } from "next-intl/dist/src/react-server";
import { FC } from "react";

import { LatestProjectsList } from "./LatestProjectsList";

const LatestProjectsSection: FC = () => {
  const t = useTranslations("projects");

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mt={3} mb={3}>
        <Typography>{t("latest")}</Typography>
        <Button>
          <Typography>{t("seeAll")}</Typography>
        </Button>
      </Stack>
      <LatestProjectsList />
    </>
  );
};

export default LatestProjectsSection;
