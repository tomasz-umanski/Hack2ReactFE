import { SxProps } from "@mui/system";
import { useTheme } from "@ui/theme";
import { CSSProperties } from "react";

export const useEventsCalendarStyles = () => {
  const { typography } = useTheme();

  const dateCalendarStyles: SxProps = {
    width: "340px",
    margin: 0,
    overflow: "visible",

    "& .MuiPickersSlideTransition-root": {
      backgroundColor: "white",
      boxShadow: "0px 1px 2px 0px #1018281A",
      borderRadius: "10px",
      overflow: "hidden"
    },

    "& .MuiDayCalendar-header": {
      padding: "0 16px",
      justifyContent: "center",
      gap: "16px"
    },

    "& .MuiDayCalendar-monthContainer": {
      padding: "0 16px",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: "8px",
      height: 1
    },

    "& .MuiDayCalendar-weekContainer": {
      gap: "0 16px",
      margin: "0"
    },

    "& .MuiPickersDay-dayWithMargin, & .MuiDayCalendar-weekDayLabel": {
      width: "30px",
      height: "30px",
      margin: "0"
    },

    "& .MuiPickersArrowSwitcher-root": {
      gap: "16px"
    },

    "& .MuiPickersCalendarHeader-root": {
      justifyContent: "center",
      marginTop: 0,
      minHeight: "32px",
      marginBottom: 4,
      padding: 0
    },

    "& .MuiPickersCalendarHeader-labelContainer": <CSSProperties>{
      padding: "0 12px 0 14px",
      backgroundColor: "white",
      boxShadow: "0px 1px 2px 0px #1018281A",
      borderRadius: "10px",
      ...typography.semibold_text_sm
    }
  };

  return {
    dateCalendarStyles
  };
};
