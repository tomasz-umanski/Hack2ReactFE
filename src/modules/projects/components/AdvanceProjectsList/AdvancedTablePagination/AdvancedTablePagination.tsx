"use client";

import { Box, TablePagination } from "@ui/atoms";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

const AdvancedTablePagination: FC = () => {
  const router = useRouter();

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    value: number
  ): void => {
    console.log(router, value);
  };

  return (
    <Box>
      <TablePagination
        sx={{ width: "100%", display: "flex" }}
        count={10}
        page={0}
        onPageChange={handlePageChange}
        rowsPerPage={13}
      />
    </Box>
  );
};

export default AdvancedTablePagination;
