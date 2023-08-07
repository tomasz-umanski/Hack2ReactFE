import { createTheme } from "@mui/material";
import { Theme, useTheme as useMuiTheme } from "@mui/material/styles";

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

export const useTheme = (): Theme => useMuiTheme();
