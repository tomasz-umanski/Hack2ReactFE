import { siderbarLinksConstant } from "@modules/sidebar/basic/constants/SiderbarLinks.constant";
import { SidebarLink } from "@modules/sidebar/basic/types/sidebarLink.type";
import { useSiderbarStyles } from "@modules/sidebar/components/Sidebar/Siderbar.styles";
import {
  Box,
  Collapse,
  Divider,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Skeleton,
  Stack,
  TextField,
  Typography
} from "@ui/atoms";
import { FC } from "react";

const Sidebar: FC = () => {
  const {
    sidebarWrapper,
    formControlStyles,
    textFieldStyles,
    userNameStyles,
    userEmailStyles,
    listItemStyles
  } = useSiderbarStyles();

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
              return (
                <ListItem sx={listItemStyles} key={link.label}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Skeleton animation="wave" height={40} width={40} variant="rounded" />
                    </ListItemIcon>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              );
            }

            return (
              <>
                <ListItem sx={listItemStyles} key={link.label}>
                  <ListItemButton>
                    <ListItemIcon>
                      <Skeleton animation="wave" height={40} width={40} variant="rounded" />
                    </ListItemIcon>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
                <Collapse in={true}>
                  {link.subLinks.map((subLink: SidebarLink) => (
                    <ListItem sx={listItemStyles} key={subLink.label}>
                      <ListItemButton>
                        <ListItemIcon>
                          <Skeleton animation="wave" height={40} width={40} variant="rounded" />
                        </ListItemIcon>
                        <ListItemText primary={subLink.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Collapse>
              </>
            );
          })}
          <Divider />
          <ListItem sx={listItemStyles}>
            <ListItemButton>
              <ListItemIcon>
                <Skeleton animation="wave" height={40} width={40} variant="rounded" />
              </ListItemIcon>
              <ListItemText primary="Kontakt z miastem" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Stack>
  );
};

export default Sidebar;
