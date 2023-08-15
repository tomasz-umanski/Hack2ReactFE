import { Project } from "@modules/projects/api/project.type";
import { latestProjectsColumns } from "@modules/projects/basic/constants/latestProjectsColumns.constants";
import { LatestProjectsRows } from "@modules/projects/basic/types/latestProjectsRows.types";
import { DataGrid } from "@ui/organisms";

import { Pagination } from "@/basic/types/pagination.types";

import { useLatestProjectsList } from "./LatestProjectsList.hook";
import { useLatestProjectsListStyles } from "./LatestProjectsList.styles";

const getData = async (): Promise<Pagination<Project>> => {
  const res = await fetch("http://localhost:8080/project?size=6&sort=creationDate,asc");

  return res.json() as Promise<Pagination<Project>>;
};

const LatestProjectsList = async () => {
  const projects = await getData();
  const { rows } = useLatestProjectsList({ projects });
  const { dataGridStyles } = useLatestProjectsListStyles();

  /* TODO router on clicked row */
  return (
    <DataGrid<LatestProjectsRows>
      disableColumnMenu
      disableRowSelectionOnClick
      columns={latestProjectsColumns}
      rows={rows}
      hideFooter
      sx={dataGridStyles}
    />
  );
};

export default LatestProjectsList;
