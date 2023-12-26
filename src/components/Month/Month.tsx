import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./Month.styled";
import { IMonthProps } from "./MonthTypes";
import { Day } from "components/Day";
import days from "config/days";
import months from "config/months";

export const Month: FC<IMonthProps> = ({ title, year }) => {
  const monthIndex = months.findIndex((month) => month.title === title);
  const filteredDays = days.filter((day) => {
    const dayMonth = parseInt(day.date.split("-")[1], 10);
    return dayMonth === monthIndex + 1;
  });
  return (
    <Box>
      <Typography>
        {title} {year}
      </Typography>
      <Box>
        <Box>пн</Box>
        <Box>вт</Box>
        <Box>ср</Box>
        <Box>чт</Box>
        <Box>пт</Box>
        <Box>сб</Box>
        <Box>вс</Box>
      </Box>
      <Box>
        {filteredDays.map((day) => (
          <Day key={day.id} date={day.date} />
        ))}
      </Box>
    </Box>
  );
};
