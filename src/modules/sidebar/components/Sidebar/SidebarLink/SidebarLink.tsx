"use client";

import { ISidebarLink } from "@modules/sidebar/basic/types/sidebarLink.type";
import { SidebarLinkStyles } from "@modules/sidebar/components/Sidebar/SidebarLink/SidebarLink.styles";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton } from "@ui/atoms";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  link: ISidebarLink;
}

const SidebarLink: FC<Props> = (props) => {
  const { link } = props;
  const router = useRouter();
  const { listItemStyles } = SidebarLinkStyles();

  const handleRedirect = () => {
    router.push(link.link);
  };

  return (
    <ListItem sx={listItemStyles} onClick={handleRedirect}>
      <ListItemButton>
        <ListItemIcon>
          <Skeleton animation="wave" height={40} width={40} variant="rounded" />
        </ListItemIcon>
        <ListItemText primary={link.label} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarLink;
