export interface ISidebarLink {
  label: string;
  iconUrl: string;
  subLinks?: ISidebarLink[];
  link: string;
}
