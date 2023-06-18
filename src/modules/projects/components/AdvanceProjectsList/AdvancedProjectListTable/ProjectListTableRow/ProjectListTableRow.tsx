"use client";

import { Project } from "@modules/projects/api/project.type";
import { dayjs } from "@services/dates";
import { TableCell, TableRow } from "@ui/atoms";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  project: Project;
}

const ProjectListTableRow: FC<Props> = (props) => {
  const { project } = props;
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/projects/${project.id}`);
  };

  return (
    <TableRow onClick={handleRedirect}>
      <TableCell>{project.title}</TableCell>
      <TableCell>{project.status}</TableCell>
      <TableCell>{dayjs(project.startDateTime).format("DD.MM.YYYY")}</TableCell>
      <TableCell>{dayjs(project.endDateTime).format("DD.MM.YYYY")}</TableCell>
      <TableCell>
        {project.organizationList.find((o) => o.id === project.mainOrganizationId)?.name || ""}
      </TableCell>
      <TableCell>{project.description}</TableCell>
    </TableRow>
  );
};

export default ProjectListTableRow;
