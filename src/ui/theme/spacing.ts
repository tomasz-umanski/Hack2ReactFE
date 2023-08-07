import { createSpacing, Spacing } from "@mui/system";

export const spacing: Spacing = createSpacing(
  Object.values({
    NONE: "0px", // 0
    XXXX_SMALL: "4px", // 1
    XXX_SMALL: "8px", // 2
    XX_SMALL: "10px", // 3
    X_SMALL: "14px", // 4
    SMALL: "16px" // 5
  })
);
