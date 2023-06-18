import { Project } from "@modules/projects/api/project.type";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@ui/atoms";
import { FC } from "react";

import { Pagination } from "@/basic/types/pagination.types";

import ProjectListTableRow from "./ProjectListTableRow/ProjectListTableRow";

interface Props {
  projects: Pagination<Project>;
}

const AdvancedProjectListTable: FC<Props> = (props) => {
  const { projects } = props;

  return (
    <Box>
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
    </Box>
  );
};

export default AdvancedProjectListTable;
