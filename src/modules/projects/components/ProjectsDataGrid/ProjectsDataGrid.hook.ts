import { Project } from "@modules/projects/api/project.type";
import { latestProjectsColumns } from "@modules/projects/basic/constants/latestProjectsColumns.constants";
import { LatestProjectsRows } from "@modules/projects/basic/types/latestProjectsRows.types";
import { dayjs } from "@services/dates";
import { GridColDef } from "@ui/organisms";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

import { Pagination } from "@/basic/types/pagination.types";

interface Props {
  projects: Pagination<Project>;
}

export const useLatestProjectsList = (props: Props) => {
  const { projects, rowCount } = props;
  const t = useTranslations("");
  const [rows, setRows] = useState<LatestProjectsRows[]>([]);
  const [columns, setColumns] = useState<GridColDef<LatestProjectsRows>[]>([]);

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

    while (newRows.length < rowCount) {
      newRows.push({
        id: "",
        projectName: ""
      } as LatestProjectsRows);
    }

    setRows([...newRows]);
  }, [projects.content, rowCount]);

  const prepareColumns = useCallback(() => {
    setColumns(
      latestProjectsColumns.map((column) => ({ ...column, headerName: t(column.headerName || "") }))
    );
  }, [t]);

  useEffect(() => {
    prepareRows();
    prepareColumns();
  }, [prepareColumns, prepareRows, projects, t]);

  return {
    rows,
    columns
  };
};
