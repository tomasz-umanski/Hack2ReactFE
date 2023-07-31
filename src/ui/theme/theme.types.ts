/* eslint-disable */

import { ColorsKeys } from "./colors";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    colors: Record<ColorsKeys, string>
  }

  interface ThemeOptions {
    colors?: Record<ColorsKeys, string>
  }

  // interface Palette {
  //   //tertiary: PaletteColor
  // }
  //
  // interface PaletteOptions {
  //   //tertiary?: PaletteColorOptions
  // }

  interface Typography {
    regular_2xl: React.CSSProperties;
    medium_2xl: React.CSSProperties;
    semibold_2xl: React.CSSProperties;
    bold_2xl: React.CSSProperties;
    regular_xl: React.CSSProperties;
    medium_xl: React.CSSProperties;
    semibold_xl: React.CSSProperties;
    bold_xl: React.CSSProperties;
    regular_lg: React.CSSProperties;
    medium_lg: React.CSSProperties;
    semibold_lg: React.CSSProperties;
    bold_lg: React.CSSProperties;
    regular_md: React.CSSProperties;
    medium_md: React.CSSProperties;
    semibold_md: React.CSSProperties;
    bold_md: React.CSSProperties;
    regular_sm: React.CSSProperties;
    medium_sm: React.CSSProperties;
    semibold_sm: React.CSSProperties;
    bold_sm: React.CSSProperties;
    regular_xs: React.CSSProperties;
    medium_xs: React.CSSProperties;
    semibold_xs: React.CSSProperties;
    bold_xs: React.CSSProperties;
    regular_text_xl: React.CSSProperties;
    medium_text_xl: React.CSSProperties;
    semibold_text_xl: React.CSSProperties;
    bold_text_xl: React.CSSProperties;
    regular_text_lg: React.CSSProperties;
    medium_text_lg: React.CSSProperties;
    semibold_text_lg: React.CSSProperties;
    bold_text_lg: React.CSSProperties;
    regular_text_md: React.CSSProperties;
    medium_text_md: React.CSSProperties;
    semibold_text_md: React.CSSProperties;
    bold_text_md: React.CSSProperties;
    regular_text_sm: React.CSSProperties;
    medium_text_sm: React.CSSProperties;
    semibold_text_sm: React.CSSProperties;
    bold_text_sm: React.CSSProperties;
    regular_text_xs: React.CSSProperties;
    medium_text_xs: React.CSSProperties;
    semibold_text_xs: React.CSSProperties;
    bold_text_xs: React.CSSProperties;
  }

  interface TypographyOptions {
    regular_2xl?: React.CSSProperties;
    medium_2xl?: React.CSSProperties;
    semibold_2xl?: React.CSSProperties;
    bold_2xl?: React.CSSProperties;
    regular_xl?: React.CSSProperties;
    medium_xl?: React.CSSProperties;
    semibold_xl?: React.CSSProperties;
    bold_xl?: React.CSSProperties;
    regular_lg?: React.CSSProperties;
    medium_lg?: React.CSSProperties;
    semibold_lg?: React.CSSProperties;
    bold_lg?: React.CSSProperties;
    regular_md?: React.CSSProperties;
    medium_md?: React.CSSProperties;
    semibold_md?: React.CSSProperties;
    bold_md?: React.CSSProperties;
    regular_sm?: React.CSSProperties;
    medium_sm?: React.CSSProperties;
    semibold_sm?: React.CSSProperties;
    bold_sm?: React.CSSProperties;
    regular_xs?: React.CSSProperties;
    medium_xs?: React.CSSProperties;
    semibold_xs?: React.CSSProperties;
    bold_xs?: React.CSSProperties;
    regular_text_xl?: React.CSSProperties;
    medium_text_xl?: React.CSSProperties;
    semibold_text_xl?: React.CSSProperties;
    bold_text_xl?: React.CSSProperties;
    regular_text_lg?: React.CSSProperties;
    medium_text_lg?: React.CSSProperties;
    semibold_text_lg?: React.CSSProperties;
    bold_text_lg?: React.CSSProperties;
    regular_text_md?: React.CSSProperties;
    medium_text_md?: React.CSSProperties;
    semibold_text_md?: React.CSSProperties;
    bold_text_md?: React.CSSProperties;
    regular_text_sm?: React.CSSProperties;
    medium_text_sm?: React.CSSProperties;
    semibold_text_sm?: React.CSSProperties;
    bold_text_sm?: React.CSSProperties;
    regular_text_xs?: React.CSSProperties;
    medium_text_xs?: React.CSSProperties;
    semibold_text_xs?: React.CSSProperties;
    bold_text_xs?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    regular_2xl: true
    medium_2xl: true
    semibold_2xl: true
    bold_2xl: true
    regular_xl: true
    medium_xl: true
    semibold_xl: true
    bold_xl: true
    regular_lg: true
    medium_lg: true
    semibold_lg: true
    bold_lg: true
    regular_md: true
    medium_md: true
    semibold_md: true
    bold_md: true
    regular_sm: true
    medium_sm: true
    semibold_sm: true
    bold_sm: true
    regular_xs: true
    medium_xs: true
    semibold_xs: true
    bold_xs: true
    regular_text_xl: true
    medium_text_xl: true
    semibold_text_xl: true
    bold_text_xl: true
    regular_text_lg: true
    medium_text_lg: true
    semibold_text_lg: true
    bold_text_lg: true
    regular_text_md: true
    medium_text_md: true
    semibold_text_md: true
    bold_text_md: true
    regular_text_sm: true
    medium_text_sm: true
    semibold_text_sm: true
    bold_text_sm: true
    regular_text_xs: true
    medium_text_xs: true
    semibold_text_xs: true
    bold_text_xs: true
  }

  interface TypographyClasses {
    regular_2xl: true
    medium_2xl: true
    semibold_2xl: true
    bold_2xl: true
    regular_xl: true
    medium_xl: true
    semibold_xl: true
    bold_xl: true
    regular_lg: true
    medium_lg: true
    semibold_lg: true
    bold_lg: true
    regular_md: true
    medium_md: true
    semibold_md: true
    bold_md: true
    regular_sm: true
    medium_sm: true
    semibold_sm: true
    bold_sm: true
    regular_xs: true
    medium_xs: true
    semibold_xs: true
    bold_xs: true
    regular_text_xl: true
    medium_text_xl: true
    semibold_text_xl: true
    bold_text_xl: true
    regular_text_lg: true
    medium_text_lg: true
    semibold_text_lg: true
    bold_text_lg: true
    regular_text_md: true
    medium_text_md: true
    semibold_text_md: true
    bold_text_md: true
    regular_text_sm: true
    medium_text_sm: true
    semibold_text_sm: true
    bold_text_sm: true
    regular_text_xs: true
    medium_text_xs: true
    semibold_text_xs: true
    bold_text_xs: true
  }
}

declare module "@mui/x-date-pickers/DateCalendar" {
  interface DayCalendarSlotsComponentsProps {
    highlightedDays?: string[]
  }
}
