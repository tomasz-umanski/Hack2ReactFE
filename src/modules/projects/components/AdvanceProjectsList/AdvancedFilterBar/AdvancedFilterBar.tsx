"use client";

import { projectCategories } from "@modules/projects/basic/constants/projectCategories";
import { ProjectCategories } from "@modules/projects/basic/types/projectCategories.type";
import { Search } from "@mui/icons-material";
import {
  Box,
  Chip,
  DatePicker,
  InputAdornment,
  LocalizationProvider,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography
} from "@ui/atoms";
import { Dayjs } from "dayjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, FC, useEffect, useState } from "react";

const AdvancedFilterBar: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  // @ts-ignore @ts-nocheck
  const searchParams: URLSearchParams = useSearchParams() as URLSearchParams;
  const [filters, setFilters] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategories>(
    {} as ProjectCategories
  );

  useEffect(() => {
    const newFilters: string[] = [];
    searchParams.forEach((value, key) => {
      newFilters.push(`${key}: ${value}`);
    });
    setFilters(newFilters);
  }, [searchParams]);

  const handleSelectCategory = (category: ProjectCategories): void => {
    setSelectedCategory(category);
  };

  const inputOnChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    setSelectedCategory((category) => ({
      ...category,
      search: e.target.value
    }));
  };

  const handleSearch = () => {
    const current = new URLSearchParams(searchParams);

    if (selectedCategory.search) {
      current.set(selectedCategory.value, selectedCategory.search || "");
    } else {
      current.delete(selectedCategory.value);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
    router.refresh();
  };

  const handleStartDate = (value: Dayjs | null) => {
    const current = new URLSearchParams(searchParams);
    current.set("startDate", value?.toISOString() || "");
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
    router.refresh();
  };

  const handleEndDate = (value: Dayjs | null) => {
    const current = new URLSearchParams(searchParams);
    current.set("endDate", value?.toISOString() || "");
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
    router.refresh();
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Box>
        {filters.map((filter) => (
          <Chip key={filter} label={filter} />
        ))}
      </Box>
      <Stack direction="row" alignItems="center" gap="8px">
        <Typography>Termin</Typography>
        <LocalizationProvider>
          <DatePicker
            label="data od"
            sx={{ width: "128px" }}
            value={null}
            onChange={handleStartDate}
          />
          <Typography> - </Typography>
          <DatePicker
            label="data od"
            sx={{ width: "128px" }}
            value={null}
            onChange={handleEndDate}
          />
        </LocalizationProvider>
      </Stack>
      <Stack direction="row">
        <TextField
          select
          inputProps={{
            placeholder: "Wybierz kategorię"
          }}
          sx={{ width: "185px" }}
          value={selectedCategory?.value || ""}
        >
          {projectCategories.map((category) => (
            <MenuItem
              key={category.value}
              value={category.value}
              onClick={() => handleSelectCategory(category)}
            >
              {category.label}
            </MenuItem>
          ))}
        </TextField>
        <OutlinedInput
          value={selectedCategory?.search || ""}
          placeholder="Szukaj..."
          id="navigationSearch"
          type="text"
          disabled={!selectedCategory.value}
          onChange={inputOnChange}
          onKeyDown={handleOnKeyPress}
          endAdornment={
            <InputAdornment position="end" onClick={handleSearch}>
              <Search />
            </InputAdornment>
          }
        />
      </Stack>
    </Stack>
  );
};

export default AdvancedFilterBar;
