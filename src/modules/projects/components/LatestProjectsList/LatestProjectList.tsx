import { Project } from "@modules/projects/api/project.type";
import { dayjs } from "@services/dates";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@ui/atoms";

import { Pagination } from "@/basic/types/pagination.types";

const getData = async (): Promise<Pagination<Project>> => {
  const res: Promise<Pagination<Project>> = await new Promise((resolve) => {
    resolve({
      content: [
        {
          id: "c189b9e5-4637-46f3-800e-d4711652141e",
          title: "tytul",
          content: "dasdasdsadas",
          startDateTime: "2023-06-17T08:15:30Z",
          endDateTime: "2023-06-17T08:15:30Z",
          description: "aaaaaaaa",
          status: "werwer",
          volunteeringPossible: true,
          referenceUrl: "asddsadsa.pl",
          creationDate: "2023-06-17T10:22:02.324978Z",
          lastUpdated: "2023-06-17T10:22:02.324978Z",
          active: false
        },
        {
          id: "9e23b4a8-d565-4822-a740-1559b2eae9fc",
          title: "tytul",
          content: "dasdasdsadas",
          startDateTime: "2023-06-17T08:15:30Z",
          endDateTime: "2023-06-17T08:15:30Z",
          description: "aaaaaaaa",
          status: "werwer",
          volunteeringPossible: true,
          referenceUrl: "asddsadsa.pl",
          creationDate: "2023-06-17T10:22:02.987818Z",
          lastUpdated: "2023-06-17T10:22:02.987818Z",
          active: false
        },
        {
          id: "a3bfe1b6-e22e-40ba-94f0-32ba4375a588",
          title: "tytul",
          content: "dasdasdsadas",
          startDateTime: "2023-06-17T08:15:30Z",
          endDateTime: "2023-06-17T08:15:30Z",
          volunteeringPossible: true,
          description: "aaaaaaaa",
          status: "werwer",
          referenceUrl: "asddsadsa.pl",
          creationDate: "2023-06-17T10:22:03.640271Z",
          lastUpdated: "2023-06-17T10:22:03.640271Z",
          active: false
        },
        {
          id: "05fec6a1-2ea4-4fb7-a184-68998f2df568",
          title: "tytul",
          content: "dasdasdsadas",
          startDateTime: "2023-06-17T08:15:30Z",
          endDateTime: "2023-06-17T08:15:30Z",
          description: "aaaaaaaa",
          status: "werwer",
          volunteeringPossible: true,
          referenceUrl: "asddsadsa.pl",
          creationDate: "2023-06-17T10:22:04.141733Z",
          lastUpdated: "2023-06-17T10:22:04.141733Z",
          active: false
        },
        {
          id: "835ae9a6-15e1-4a1a-b8b4-76aa6edf719d",
          title: "tytul",
          content: "dasdasdsadas",
          startDateTime: "2023-06-17T08:15:30Z",
          endDateTime: "2023-06-17T08:15:30Z",
          volunteeringPossible: true,
          description: "aaaaaaaa",
          status: "werwer",
          referenceUrl: "asddsadsa.pl",
          creationDate: "2023-06-17T10:22:04.564217Z",
          lastUpdated: "2023-06-17T10:22:04.564217Z",
          active: false
        },
        {
          id: "539b2485-409c-4764-b33c-973258bdb454",
          title: "tytul",
          content: "dasdasdsadas",
          startDateTime: "2023-06-17T08:15:30Z",
          endDateTime: "2023-06-17T08:15:30Z",
          description: "aaaaaaaa",
          status: "werwer",
          volunteeringPossible: true,
          referenceUrl: "asddsadsa.pl",
          creationDate: "2023-06-17T10:22:05.065262Z",
          lastUpdated: "2023-06-17T10:22:05.065262Z",
          active: false
        },
        {
          id: "dc65ad2e-ffb9-493c-83f7-572a603a4cf2",
          title: "tytul",
          description: "aaaaaaaa",
          status: "werwer",
          content: "dasdasdsadas",
          startDateTime: "2023-06-17T08:15:30Z",
          endDateTime: "2023-06-17T08:15:30Z",
          volunteeringPossible: true,
          referenceUrl: "asddsadsa.pl",
          creationDate: "2023-06-17T10:22:05.506298Z",
          lastUpdated: "2023-06-17T10:22:05.506298Z",
          active: false
        },
        {
          id: "2efa3c77-2d2c-4a8e-bfd3-2073d629653e",
          description: "aaaaaaaa",
          status: "werwer",
          title: "tytul",
          content: "dasdasdsadas",
          startDateTime: "2023-06-17T08:15:30Z",
          endDateTime: "2023-06-17T08:15:30Z",
          volunteeringPossible: true,
          referenceUrl: "asddsadsa.pl",
          creationDate: "2023-06-17T10:22:05.958895Z",
          lastUpdated: "2023-06-17T10:22:05.958895Z",
          active: false
        }
      ],
      pageable: {
        sort: {
          empty: true,
          sorted: false,
          unsorted: true
        },
        offset: 0,
        pageNumber: 0,
        pageSize: 20,
        paged: true,
        unpaged: false
      },
      last: true,
      totalPages: 1,
      totalElements: 8,
      size: 20,
      number: 0,
      sort: {
        empty: true,
        sorted: false,
        unsorted: true
      },
      first: true,
      numberOfElements: 8,
      empty: false
    });
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
