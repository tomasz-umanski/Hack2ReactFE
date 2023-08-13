import { SxProps } from "@mui/system";
import { useTheme } from "@ui/theme";

export const useEventCalendarSlotStyles = () => {
  const { typography } = useTheme();

  const pickersDayStyles: SxProps = {
    ...typography.regular_text_sm,
    margin: "0",
    width: "30px",
    height: "30px"
  };

  return {
    pickersDayStyles
  };
};
