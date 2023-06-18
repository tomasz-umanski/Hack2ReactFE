import { Project } from "@modules/projects/api/project.type";
import { dayjs } from "@services/dates";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@ui/atoms";
import mockProject from "./mockLatestProjectList.json"
import { Pagination } from "@/basic/types/pagination.types";

const getData = async (): Promise<Pagination<Project>> => {
  const res: Promise<Pagination<Project>> = await new Promise((resolve) => {
    resolve(JSON.parse(JSON.stringify(mockProject)) as Pagination<Project>);
  });

  return res;
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
            <TableRow>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>{dayjs(project.startDateTime).format("DD.MM.YYYY")}</TableCell>
              <TableCell>{dayjs(project.endDateTime).format("DD.MM.YYYY")}</TableCell>
              <TableCell>organizator</TableCell>
              <TableCell>{project.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LatestProjectList;
