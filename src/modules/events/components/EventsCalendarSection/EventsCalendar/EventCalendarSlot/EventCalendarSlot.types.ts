import { PickersDayProps } from "@ui/atoms";

export interface HighlightedDays {
  highlightedDays?: string[];
}

export interface CalendarSlotProps extends PickersDayProps, HighlightedDays {}
