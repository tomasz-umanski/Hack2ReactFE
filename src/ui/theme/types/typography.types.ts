import { CustomVariants } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides extends Record<CustomVariants, true> {}

  interface TypographyClasses extends Record<CustomVariants, true> {}
}
