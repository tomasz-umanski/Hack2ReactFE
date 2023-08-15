import { Project } from "@modules/projects/api/project.type";
import { LatestProjectsRows } from "@modules/projects/basic/types/latestProjectsRows.types";
import { dayjs } from "@services/dates";
import { useCallback, useEffect, useState } from "react";

import { Pagination } from "@/basic/types/pagination.types";

interface Props {
  projects: Pagination<Project>;
}

export const useLatestProjectsList = (props: Props) => {
  const { projects } = props;
  const [rows, setRows] = useState<LatestProjectsRows[]>([]);

  const prepareRows = useCallback(() => {
    const newRows = projects.content.map((project) => ({
      id: project.id,
      projectName: project.title,
      status: project.status,
      startDate: dayjs(project.startDateTime).format("DD.MM.YYYY"),
      endDate: dayjs(project.endDateTime).format("DD.MM.YYYY"),
      organization:
        project.organizationList.find(
          (organization) => organization.id === project.mainOrganizationId
        )?.name || "",
      description: project.description
    }));

    setRows([...newRows]);
  }, [projects]);

  useEffect(() => {
    prepareRows();
  }, [prepareRows, projects]);

  return {
    rows
  };
};
