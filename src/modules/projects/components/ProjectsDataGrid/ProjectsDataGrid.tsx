"use client";

import { Project } from "@modules/projects/api/project.type";
import { LatestProjectsRows } from "@modules/projects/basic/types/latestProjectsRows.types";
import { DataGrid } from "@ui/organisms";
import { FC } from "react";

import { Pagination } from "@/basic/types/pagination.types";

import { useLatestProjectsList } from "./ProjectsDataGrid.hook";
import { useLatestProjectsListStyles } from "./ProjectsDataGrid.styles";

interface Props {
  projects: Pagination<Project>;
  rowCount?: number;
}

const ProjectsDataGrid: FC<Props> = (props) => {
  const { projects, rowCount } = props;
  const { rows, columns } = useLatestProjectsList({ projects, rowCount });
  const { dataGridStyles } = useLatestProjectsListStyles();

  /* TODO router on clicked row */
  return (
    <DataGrid<LatestProjectsRows>
      disableColumnMenu
      disableRowSelectionOnClick
      columns={columns}
      rows={rows}
      hideFooter
      sx={dataGridStyles}
    />
  );
};

export default ProjectsDataGrid;
