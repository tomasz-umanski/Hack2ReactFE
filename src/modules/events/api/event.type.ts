import { Organization } from "@modules/organization/api/organization.type";

export interface Event {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  content: string;
  localization: string;
  creationDate: string;
  lastUpdated: string;
  active: boolean;
  mainOrganizationId: string;
  organizationList: Organization[];
}
