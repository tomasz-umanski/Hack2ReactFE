import { SidebarLink } from "@modules/sidebar/basic/types/sidebarLink.type";

export const siderbarLinksConstant: SidebarLink[] = [
  {
    label: "Strona Główna",
    iconUrl: "",
    link: "/"
  },
  {
    label: "Moje NGO",
    iconUrl: "",
    link: "/ngo"
  },
  {
    label: "Baza NGO",
    iconUrl: "",
    link: "/ngo/workspace"
  },
  {
    label: "Baza MŚP",
    iconUrl: "",
    link: "/msp/workspace"
  },
  {
    label: "Wydarzenia",
    iconUrl: "",
    link: "/events"
  },
  {
    label: "Projekty",
    iconUrl: "",
    link: "/projects"
  },
  {
    label: "Baza wiedzy",
    iconUrl: "",
    link: "/wiedza"
  },
  {
    label: "Linki zewnętrzne",
    iconUrl: "",
    link: "/wiedza",
    subLinks: []
  }
];
