import "./global.css";

import SidebarLayout from "@modules/sidebar/components/SidebarLayout/SidebarLayout";
import { notFound } from "next/navigation";
import { AbstractIntlMessages, useLocale } from "next-intl";
import React, { FC, ReactNode } from "react";

import { ClientLayout } from "@/layouts";

export const metadata = {
  title: "hack2react",
  description: "hacks squad"
};

interface Props {
  children: ReactNode;
  params: { locale: string };
}

const loadMessages = async (locale): Promise<AbstractIntlMessages> => {
  return JSON.parse(
    JSON.stringify(await import(`./../../messages/${locale}.json`))
  ) as AbstractIntlMessages;
};

const LocaleLayout: FC<Props> = async (props) => {
  const { children, params } = props;
  const locale = useLocale();
  let messages: AbstractIntlMessages = {};

  if (params.locale !== locale) {
    notFound();
  }

  try {
    messages = await loadMessages(locale);
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body>
        <ClientLayout messages={messages} locale={params.locale}>
          <SidebarLayout>{children}</SidebarLayout>
        </ClientLayout>
      </body>
    </html>
  );
};

export default LocaleLayout;
