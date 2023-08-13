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
      borderRadius: 2,
      overflow: "hidden"
    },

    "& .MuiDayCalendar-header": {
      paddingY: 0,
      paddingX: 3,
      justifyContent: "center",
      gap: 3
    },

    "& .MuiDayCalendar-monthContainer": {
      paddingY: 0,
      paddingX: 3,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: 2,
      height: 1
    },

    "& .MuiDayCalendar-weekContainer": {
      rowGap: 0,
      columnGap: 3,
      margin: 0
    },

    "& .MuiPickersDay-dayWithMargin, & .MuiDayCalendar-weekDayLabel": {
      width: "30px",
      height: "30px",
      margin: 0
    },

    "& .MuiPickersArrowSwitcher-root": {
      gap: 3
    },

    "& .MuiPickersCalendarHeader-root": {
      justifyContent: "center",
      marginTop: 0,
      minHeight: "32px",
      marginBottom: 4,
      padding: 0
    },

    "& .MuiPickersCalendarHeader-labelContainer": <CSSProperties>{
      paddingY: 0,
      paddingX: 3,
      backgroundColor: "white",
      boxShadow: "0px 1px 2px 0px #1018281A",
      borderRadius: 16,
      ...typography.semibold_text_sm
    }
  };

  return {
    dateCalendarStyles
  };
};
