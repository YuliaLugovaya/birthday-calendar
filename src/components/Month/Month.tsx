import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./Month.styled";
import { IMonthProps } from "./MonthTypes";
import { Day } from "components/Day";
import days from "config/days";
import months from "config/months";

export const Month: FC<IMonthProps> = ({ title, year, id }) => {
  const monthIndex = months.findIndex((month) => month.title === title);
  const filteredDays = days.filter((day) => {
    const dayMonth = parseInt(day.date.split("-")[1], 10);
    return dayMonth === monthIndex + 1;
  });
  const firstDayOfMonth = new Date(parseInt(year), monthIndex, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const weekDaysArray = [1, 2, 3, 4, 5, 6, 0];

  const startIndex = weekDaysArray.indexOf(firstDayOfWeek);
  const previousMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
  const previousMonthDays = days.filter((day) => {
    const dayMonth = parseInt(day.date.split("-")[1], 10);
    return dayMonth === previousMonthIndex + 1;
  });
  const previousMonthLastDays = previousMonthDays
    .slice(-startIndex)
    .map((day) => parseInt(day.date.split("-")[2]));

  const emptyCells = Array.from({ length: startIndex }, (_, index) => (
    <Box sx={styles.monthEmptyCell} key={`${index}start`}>
      {previousMonthLastDays[index]}
    </Box>
  ));

  const endIndex = 42 - (startIndex + filteredDays.length);
  const emptyCellsEnd = Array(endIndex)
    .fill(null)
    .map((_, index) => {
      const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1;
      const nextMonthDays = days.filter((day) => {
        const dayMonth = parseInt(day.date.split("-")[1], 10);
        return dayMonth === nextMonthIndex + 1;
      });
      const nextMonthFirstDays = nextMonthDays
        .slice(0, 31)
        .map((day) => parseInt(day.date.split("-")[2]));
      return (
        <Box sx={styles.monthEmptyCell} key={`${index}end`}>
          {nextMonthFirstDays[index]}
        </Box>
      );
    });

  return (
    <Box sx={styles.monthContainer}>
      <Box sx={styles.monthTitle}>
        <Typography sx={styles.monthTitleElement}>{id}</Typography>
        <Typography sx={styles.monthTitleElement}>{title}</Typography>
        <Typography sx={styles.monthTitleElement}>{year}</Typography>
      </Box>
      <Box sx={styles.monthContent}>
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
          {emptyCells
            .concat(
              filteredDays.map((day) => <Day key={day.id} date={day.date} />),
            )
            .concat(emptyCellsEnd)}
        </Box>
      </Box>
    </Box>
  );
};
