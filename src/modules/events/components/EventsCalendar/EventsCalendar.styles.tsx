import { SxProps } from "@mui/system";

export const useEventsCalendarStyles = () => {
  const dateCalendarStyles: SxProps = {
    width: "328px",
    overflow: "visible",
    "& .MuiPickersSlideTransition-root": {
      minHeight: "202px"
    },
    "& .MuiDayCalendar-weekContainer, & .MuiDayCalendar-header": {
      gap: "5px"
    },
    "& .MuiDayCalendar-monthContainer": {
      borderRadius: "10px",
      boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.1)",
      backgroundColor: "white",
      overflow: "visible",
      padding: "10px 0 0 0"
    }
  };

  return {
    dateCalendarStyles
  };
};
