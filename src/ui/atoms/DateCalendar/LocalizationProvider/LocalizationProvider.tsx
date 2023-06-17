"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider as MuiLocalizationProvider,
  LocalizationProviderProps as MuiLocalizationProviderProps
} from "@mui/x-date-pickers/LocalizationProvider";
import { FC } from "react";

type Props = Omit<MuiLocalizationProviderProps, "dataAdapter">;

const LocalizationProvider: FC<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <MuiLocalizationProvider dateAdapter={AdapterDayjs} {...rest}>
      {children}
    </MuiLocalizationProvider>
  );
};

export default LocalizationProvider;
