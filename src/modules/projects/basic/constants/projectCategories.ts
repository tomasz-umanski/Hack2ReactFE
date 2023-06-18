import { IProjectCategories } from "@modules/projects/basic/types/projectCategories.type";

export const projectCategories: IProjectCategories[] = [
  {
    label: "Nazwa projektu",
    value: "title"
  },
  // {
  //   label: "Nazwa organizacji",
  //   value: "organizationName"
  // },
  {
    label: "Opis projektu",
    value: "description"
  }
];

export const projectCategoriesValues = projectCategories.map((category) => category.value);
