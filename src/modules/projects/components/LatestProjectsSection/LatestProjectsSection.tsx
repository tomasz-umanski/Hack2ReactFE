import { Project } from "@modules/projects/api/project.type";
import { Box } from "@ui/atoms";
import { FC } from "react";

import { Pagination } from "@/basic/types/pagination.types";

import { ProjectsDataGrid } from "../ProjectsDataGrid";
import { LatestProjectsHeader } from "./LatestProjectsHeader";

const getData = async (): Promise<Pagination<Project>> => {
  const res = await fetch("http://localhost:8080/project?size=7&sort=creationDate,asc");

  return res.json() as Promise<Pagination<Project>>;
};

const LATEST_PROJECTS_ROW_COUNT = 7;

const LatestProjectsSection: FC = async () => {
  const projects = await getData();

  return (
    <Box>
      <LatestProjectsHeader />
      <ProjectsDataGrid rowCount={LATEST_PROJECTS_ROW_COUNT} projects={projects} />
    </Box>
  );
};

export default LatestProjectsSection;
