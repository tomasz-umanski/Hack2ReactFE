export interface SidebarLink {
  label: string;
  iconUrl: string;
  subLinks?: SidebarLink[];
  link: string;
}
