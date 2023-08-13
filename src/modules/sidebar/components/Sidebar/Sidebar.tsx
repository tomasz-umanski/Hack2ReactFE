import { siderbarLinksConstant } from "@modules/sidebar/basic/constants/SiderbarLinks.constant";
import type { SidebarLink } from "@modules/sidebar/basic/types/sidebarLink.type";
import {
  Box,
  Collapse,
  Divider,
  FormControl,
  List,
  MenuItem,
  Skeleton,
  Stack,
  TextField,
  Typography
} from "@ui/atoms";
import { FC } from "react";

import { SidebarItemLink } from "./SidebarItemLink";
import { useSiderbarStyles } from "./Siderbar.styles";

const Sidebar: FC = () => {
  const { sidebarWrapper, formControlStyles, textFieldStyles, userNameStyles, userEmailStyles } =
    useSiderbarStyles();

  return (
    <Stack sx={sidebarWrapper}>
      <Box pb="16px">
        <Skeleton animation="wave" height={38} width={140} variant="rectangular" />
      </Box>
      <Divider />
      <Stack py="12px" direction="row" gap="12px">
        <Box>
          <Skeleton animation="wave" height={40} width={40} variant="rounded" />
        </Box>
        <Box>
          <Typography variant="body2" sx={userNameStyles} color="gray.700">
            Jan kowalki
          </Typography>
          <Typography pb="5px" variant="body2" sx={userEmailStyles} color="gray.700">
            jankowalski@gmail.com
          </Typography>
          <FormControl sx={formControlStyles}>
            <TextField sx={textFieldStyles} select value="UKS">
              <MenuItem value="UKS">UKS</MenuItem>
            </TextField>
          </FormControl>
        </Box>
      </Stack>
      <Divider />
      <Box>
        <List disablePadding>
          {siderbarLinksConstant.map((link: SidebarLink) => {
            if (!link.subLinks) {
              return <SidebarItemLink key={link.label} link={link} />;
            }

            return (
              <>
                <SidebarItemLink link={link} />
                <Collapse in={true}>
                  {link.subLinks.map((subLink: SidebarLink) => (
                    <SidebarItemLink key={subLink.link} link={subLink} />
                  ))}
                </Collapse>
              </>
            );
          })}
          <Divider />
          <SidebarItemLink link={{ label: "Kontakt z miastem", iconUrl: "", link: "/city" }} />
        </List>
      </Box>
    </Stack>
  );
};

export default Sidebar;
