import { Organization } from "@modules/organization/api/organization.type";

export interface Project {
  id: string;
  title: string;
  content: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  volunteeringPossible: boolean;
  referenceUrl: string;
  creationDate: string;
  lastUpdated: string;
  active: boolean;
  status: string;
  mainOrganizationId: string;
  organizationList: Organization[];
}
