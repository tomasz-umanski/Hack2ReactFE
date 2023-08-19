//@ts-ignore
import type {
  FontStyle,
  FontStyleOptions,
  TypographyStyle,
  TypographyStyleOptions,
  TypographyUtils
} from "@mui/material/styles/createTypography";

declare module "@mui/material/styles/createTypography" {
  type CustomVariants =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "regular_2xl"
    | "medium_2xl"
    | "semibold_2xl"
    | "bold_2xl"
    | "regular_xl"
    | "medium_xl"
    | "semibold_xl"
    | "bold_xl"
    | "regular_lg"
    | "medium_lg"
    | "semibold_lg"
    | "bold_lg"
    | "regular_md"
    | "medium_md"
    | "semibold_md"
    | "bold_md"
    | "regular_sm"
    | "medium_sm"
    | "semibold_sm"
    | "bold_sm"
    | "regular_xs"
    | "medium_xs"
    | "semibold_xs"
    | "bold_xs"
    | "regular_text_xl"
    | "medium_text_xl"
    | "semibold_text_xl"
    | "bold_text_xl"
    | "regular_text_lg"
    | "medium_text_lg"
    | "semibold_text_lg"
    | "bold_text_lg"
    | "regular_text_md"
    | "medium_text_md"
    | "semibold_text_md"
    | "bold_text_md"
    | "regular_text_sm"
    | "medium_text_sm"
    | "semibold_text_sm"
    | "bold_text_sm"
    | "regular_text_xs"
    | "medium_text_xs"
    | "semibold_text_xs"
    | "bold_text_xs";

  interface Typography
    extends Record<CustomVariants, TypographyStyle>,
      FontStyle,
      TypographyUtils {}

  // eslint-disable-next-line
  interface TypographyOptions extends Partial<
    Record<CustomVariants, TypographyStyleOptions> & FontStyleOptions
  > {}
}
