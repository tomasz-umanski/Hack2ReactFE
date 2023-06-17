"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  DateCalendar as MuiDateCalendar,
  DateCalendarProps as MuiDateCalendarProps
} from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { FC } from "react";

export type DateCalendarProps = MuiDateCalendarProps<Dayjs>;

const DateCalendar: FC<DateCalendarProps> = (props) => {
  return <MuiDateCalendar {...props} />;
};

export default DateCalendar;
