import { SxProps } from "@mui/system";

export const useLatestProjectsListStyles = () => {
  const dataGridStyles: SxProps = {
    "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus-within": {
      outline: "none !important"
    }
  };

  return {
    dataGridStyles
  };
};
