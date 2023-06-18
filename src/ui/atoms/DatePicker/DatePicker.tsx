"use client";

import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps
} from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { FC } from "react";

export type DatePickerProps = MuiDatePickerProps<Dayjs>;

const DatePicker: FC<DatePickerProps> = (props) => {
  return <MuiDatePicker {...props} />;
};

export default DatePicker;
