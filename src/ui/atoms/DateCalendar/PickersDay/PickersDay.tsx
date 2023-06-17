"use client";

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  PickersDay as MuiPickersDay,
  PickersDayProps as MuiPickersDayProps
} from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { FC } from "react";

export type PickersDayProps = MuiPickersDayProps<Dayjs>;

const PickersDay: FC<PickersDayProps> = (props) => {
  return <MuiPickersDay {...props} />;
};

export default PickersDay;
