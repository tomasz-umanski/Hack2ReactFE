import { EventCategories } from "@modules/events/basic/types/eventCategories.type";

export const eventCategories: EventCategories[] = [
  {
    label: "Nazwa eventu",
    value: "title"
  },
  // {
  //   label: "Nazwa organizacji",
  //   value: "organizationName"
  // },
  {
    label: "Opis eventu",
    value: "description"
  }
];

export const eventCategoriesValues = eventCategories.map((category) => category.value);
