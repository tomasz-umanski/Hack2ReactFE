import { Project } from "@modules/projects/api/project.type";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@ui/atoms";

import { Pagination } from "@/basic/types/pagination.types";

import ProjectListTableRow from "../AdvanceProjectsList/AdvancedProjectListTable/ProjectListTableRow/ProjectListTableRow";

const getData = async (): Promise<Pagination<Project>> => {
  const res = await fetch("http://localhost:8080/project?size=6&sort=creationDate,asc");

  return res.json() as Promise<Pagination<Project>>;
};

const LatestProjectList = async () => {
  const projects = await getData();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Projekt</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Start</TableCell>
            <TableCell>Koniec</TableCell>
            <TableCell>Organizator</TableCell>
            <TableCell>Krótki opis</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.content.map((project) => (
            <ProjectListTableRow key={project.id} project={project} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LatestProjectList;
