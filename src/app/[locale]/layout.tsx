import "./global.css";

import SidebarLayout from "@modules/sidebar/components/SidebarLayout/SidebarLayout";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import React, { FC, ReactNode } from "react";

import MuiLayout from "./mui.layout";

export const metadata = {
  title: "hack2react",
  description: "hacks squad"
};

interface Props {
  children: ReactNode;
  params: { locale: string };
}

const LocaleLayout: FC<Props> = (props) => {
  const { children, params } = props;
  const locale = useLocale();

  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body>
        <MuiLayout>
          <SidebarLayout>{children}</SidebarLayout>
        </MuiLayout>
      </body>
    </html>
  );
};

export default LocaleLayout;
