import { createSpacing, Spacing } from "@mui/system";

export const spacing: Spacing = createSpacing(
  Object.values({
    0: "0px",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "20px",
    5: "24px",
    6: "32px",
    7: "40px",
    8: "48px",
    9: "64px",
    10: "80px",
    11: "96px",
    12: "128px",
    13: "160px",
    14: "192px",
    15: "5px", // radius
    16: "10px", // radius
    17: "15px", // radius
    18: "20px" // radius
  })
);
