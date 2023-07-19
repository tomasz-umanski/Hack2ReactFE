"use client";

import { dayjs } from "@services/dates";
import { DateCalendar, LocalizationProvider } from "@ui/atoms";
import { Dayjs } from "dayjs";
import { FC, useState } from "react";

import { CalendarSlotProps, EventCalendarSlot, HighlightedDays } from "./EventCalendarSlot";
import { useEventsCalendarStyles } from "./EventsCalendar.styles";

interface Props {
  highlightedDays: HighlightedDays;
}

const EventsCalendar: FC<Props> = (props) => {
  const { highlightedDays } = props;
  const [date, setDate] = useState<Dayjs>(dayjs());
  const { dateCalendarStyles } = useEventsCalendarStyles();

  const handleChange = (newDate: Dayjs | null) => {
    console.log(newDate?.format("YYYY-MM-DD"));
    if (newDate) {
      setDate(newDate);
    }
  };

  return (
    <LocalizationProvider>
      <DateCalendar
        value={date}
        showDaysOutsideCurrentMonth
        fixedWeekNumber={6}
        onYearChange={handleChange}
        onMonthChange={handleChange}
        onChange={(value) => handleChange(value)}
        sx={dateCalendarStyles}
        slots={{ day: EventCalendarSlot }}
        slotProps={
          {
            day: {
              highlightedDays
            } as HighlightedDays
          } as CalendarSlotProps
        }
      />
    </LocalizationProvider>
  );
};

export default EventsCalendar;
