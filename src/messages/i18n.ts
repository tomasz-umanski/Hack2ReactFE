import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(
  async ({ locale }): Promise<Record<string, unknown>> => ({
    messages: ((await import(`./${locale}.json`)) as Record<string, unknown>).default as Record<
      string,
      unknown
    >
  })
);
