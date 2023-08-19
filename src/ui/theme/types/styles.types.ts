import { ColorsKeys } from "@ui/theme/colors";

declare module "@mui/material/styles/createTheme" {
  interface Theme {
    colors: Record<ColorsKeys, string>;
  }

  interface ThemeOptions {
    colors?: Record<ColorsKeys, string>;
  }

  // interface Palette {
  //   //tertiary: PaletteColor
  // }
  //
  // interface PaletteOptions {
  //   //tertiary?: PaletteColorOptions
  // }
}
