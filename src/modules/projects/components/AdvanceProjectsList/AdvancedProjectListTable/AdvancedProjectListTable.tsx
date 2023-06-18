import { Project } from "@modules/projects/api/project.type";
import { dayjs } from "@services/dates";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@ui/atoms";
import { FC } from "react";

import { Pagination } from "@/basic/types/pagination.types";

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
              <TableRow>
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.status}</TableCell>
                <TableCell>{dayjs(project.startDateTime).format("DD.MM.YYYY")}</TableCell>
                <TableCell>{dayjs(project.endDateTime).format("DD.MM.YYYY")}</TableCell>
                <TableCell>{project.organizationList.find((o) => o.id === project.mainOrganizationId)?.name || ""}</TableCell>
                <TableCell>{project.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdvancedProjectListTable;
