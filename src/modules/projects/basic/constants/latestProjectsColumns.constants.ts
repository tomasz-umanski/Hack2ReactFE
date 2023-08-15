import { LatestProjectsRows } from "@modules/projects/basic/types/latestProjectsRows.types";
import { GridColDef } from "@ui/organisms";

export const latestProjectsColumns: GridColDef<LatestProjectsRows>[] = [
  {
    field: "projectName",
    headerName: "projects.latestProject.projectName",
    flex: 1,
    type: "string",
    sortable: true,
    resizable: false
  },
  {
    field: "status",
    headerName: "projects.latestProject.status",
    flex: 1,
    type: "string",
    sortable: false,
    resizable: false
  },
  {
    field: "startDate",
    headerName: "projects.latestProject.startDate",
    flex: 1,
    type: "string",
    sortable: false,
    resizable: false
  },
  {
    field: "endDate",
    headerName: "projects.latestProject.endDate",
    flex: 1,
    type: "string",
    sortable: false,
    resizable: false
  },
  {
    field: "organization",
    headerName: "projects.latestProject.organization",
    flex: 1,
    type: "string",
    sortable: false,
    resizable: false
  },
  {
    field: "description",
    headerName: "projects.latestProject.description",
    flex: 1,
    type: "string",
    sortable: false,
    resizable: false
  }
];
