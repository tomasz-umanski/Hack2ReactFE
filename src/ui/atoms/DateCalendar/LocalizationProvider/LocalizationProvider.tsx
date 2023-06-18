"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider as MuiLocalizationProvider,
  LocalizationProviderProps
} from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { FC } from "react";

const LocalizationProvider: FC<LocalizationProviderProps<Dayjs, unknown>> = (props) => {
  const { children, ...rest } = props;
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDayjs} {...rest}>
      {children}
    </MuiLocalizationProvider>
  );
};

export default LocalizationProvider;
