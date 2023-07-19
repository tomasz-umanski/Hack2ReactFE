"use client";

import { dayjs } from "@services/dates";
import { PickersDay } from "@ui/atoms";
import { FC } from "react";

import { useEventCalendarSlotStyles } from "./EventCalendarSlot.styles";
import { CalendarSlotProps } from "./EventCalendarSlot.types";

const EventCalendarSlot: FC<CalendarSlotProps> = (props) => {
  const { day, highlightedDays } = props;
  const { pickersDayStyles } = useEventCalendarSlotStyles();
  const selected = highlightedDays?.includes(dayjs(day).format("YYYY.MM.DD"));

  return <PickersDay {...props} sx={pickersDayStyles} selected={selected} />;
};

export default EventCalendarSlot;
