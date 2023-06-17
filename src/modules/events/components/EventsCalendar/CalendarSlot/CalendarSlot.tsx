"use client";

import { useCalendarSlotStyles } from "@modules/events/components/EventsCalendar/CalendarSlot/CalendarSlot.styles";
import { dayjs } from "@services/dates";
import { PickersDay, PickersDayProps } from "@ui/atoms";

const CalendarSlot = (props: PickersDayProps & { highlightedDays?: string[] }) => {
  const { pickersDayStyles } = useCalendarSlotStyles();
  const slotDay = dayjs(props.day).format("YYYY.MM.DD");
  const selected = props.highlightedDays?.includes(slotDay);

  return <PickersDay {...props} sx={pickersDayStyles} selected={selected} />;
};

export default CalendarSlot;
