import { createTheme } from "@mui/material";

import { colors } from "./colors";
import { components } from "./components";
import { palette } from "./palette";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const theme = createTheme({
  typography: typography,
  palette: palette,
  spacing: spacing,
  components: components,
  colors: colors
});
