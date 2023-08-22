"use client";

import { CssBaseline, StyledEngineProvider, theme, ThemeProvider } from "@ui/theme";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}

const ClientLayout: FC<Props> = (props) => {
  const { children, locale, messages } = props;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          {children}
        </StyledEngineProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};

export default ClientLayout;
