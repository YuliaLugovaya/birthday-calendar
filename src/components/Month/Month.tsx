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
  const firstDayOfMonth = new Date(parseInt(year), monthIndex, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const weekDaysArray = [1, 2, 3, 4, 5, 6, 0];
  const startIndex = weekDaysArray.indexOf(firstDayOfWeek);
  const emptyCells = Array(startIndex).fill(null);

  return (
    <Box sx={styles.monthContainer}>
      <Typography sx={styles.monthTitle}>
        {title} {year}
      </Typography>
      <Box sx={styles.monthWeek}>
        <Box sx={styles.monthDay}>пн</Box>
        <Box sx={styles.monthDay}>вт</Box>
        <Box sx={styles.monthDay}>ср</Box>
        <Box sx={styles.monthDay}>чт</Box>
        <Box sx={styles.monthDay}>пт</Box>
        <Box sx={styles.monthDay}>сб</Box>
        <Box sx={styles.monthDay}>вс</Box>
      </Box>
      <Box sx={styles.monthWrapper}>
        {emptyCells.map((_, index) => (
          <Box key={index}></Box>
        ))}
        {filteredDays.map((day) => (
          <Day key={day.id} date={day.date} />
        ))}
      </Box>
    </Box>
  );
};
