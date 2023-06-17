import { useSiderbarStyles } from "@modules/sidebar/components/Sidebar/Siderbar.styles";
import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Skeleton,
  Stack,
  TextField,
  Typography
} from "@ui/atoms";
import { FC } from "react";

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
        <List>
          <ListItem>
            <Button></Button>
          </ListItem>
        </List>
      </Box>
    </Stack>
  );
};

export default Sidebar;
