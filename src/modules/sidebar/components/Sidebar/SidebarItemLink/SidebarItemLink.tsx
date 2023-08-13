"use client";

import { SidebarLink } from "@modules/sidebar/basic/types/sidebarLink.type";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Skeleton } from "@ui/atoms";
import { useRouter } from "next/navigation";
import { FC } from "react";

import { useSidebarItemLinkStyles } from "./SidebarItemLink.styles";

interface Props {
  link: SidebarLink;
}

const SidebarItemLink: FC<Props> = (props) => {
  const { link } = props;
  const router = useRouter();
  const { listItemStyles } = useSidebarItemLinkStyles();

  const handleRedirect = () => {
    router.push(link.link);
  };

  return (
    <ListItem sx={listItemStyles}>
      <ListItemButton onClick={handleRedirect}>
        <ListItemIcon>
          <Skeleton animation="wave" height={40} width={40} variant="rounded" />
        </ListItemIcon>
        <ListItemText primary={link.label} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItemLink;
