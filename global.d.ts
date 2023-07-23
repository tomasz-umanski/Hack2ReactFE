// Use type safe message keys with `next-intl`
type Messages = typeof import("./src/messages/pl.json");
declare interface IntlMessages extends Messages {}
