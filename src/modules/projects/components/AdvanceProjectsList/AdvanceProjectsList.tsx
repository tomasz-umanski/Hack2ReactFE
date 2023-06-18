import { Project } from "@modules/projects/api/project.type";
import { AdvancedFilterBar } from "@modules/projects/components/AdvanceProjectsList/AdvancedFilterBar";
import { AdvancedProjectListTable } from "@modules/projects/components/AdvanceProjectsList/AdvancedProjectListTable";
import { AdvancedTablePagination } from "@modules/projects/components/AdvanceProjectsList/AdvancedTablePagination";
import { Stack } from "@ui/atoms";
import { headers } from "next/headers";
import { FC } from "react";

import { Pagination } from "@/basic/types/pagination.types";

const getData = async (): Promise<Pagination<Project>> => {
  const requestHeaders = headers();
  const paramsString =
    requestHeaders.get("referer") && new URL(requestHeaders.get("referer")).searchParams.toString();

  const url = `http://localhost:8080/project${paramsString ? `?${paramsString}` : ""}`;
  const res = await fetch(url);
  return res.json();
};

const AdvanceProjectsList: FC = async () => {
  const projects = await getData();

  return (
    <Stack>
      <AdvancedFilterBar />
      <AdvancedProjectListTable projects={projects} />
      <AdvancedTablePagination />
    </Stack>
  );
};

export default AdvanceProjectsList;
