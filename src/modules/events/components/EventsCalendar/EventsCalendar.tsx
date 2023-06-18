import CalendarSlot from "@modules/events/components/EventsCalendar/CalendarSlot/CalendarSlot";
import { useEventsCalendarStyles } from "@modules/events/components/EventsCalendar/EventsCalendar.styles";
import { LocalizationProvider } from "@ui/atoms";
import { DateCalendar } from "@ui/atoms/DateCalendar";
import { FC } from "react";

const getData = async (): Promise<string[]> => {
  const res: Promise<string[]> = new Promise((resolve) => {
    resolve(["2023.06.17", "2023.06.20", "2023.06.03", "2023.06.05"]);
  });

  return res;
};

const EventsCalendar: FC = async () => {
  const highlightedDays = await getData();
  const { dateCalendarStyles } = useEventsCalendarStyles();

  return (
    <LocalizationProvider>
      <DateCalendar
        readOnly
        sx={dateCalendarStyles}
        slots={{ day: CalendarSlot }}
        slotProps={{
          day: {
            // @ts-ignore
            highlightedDays
          }
        }}
      />
    </LocalizationProvider>
  );
};

export default EventsCalendar;
