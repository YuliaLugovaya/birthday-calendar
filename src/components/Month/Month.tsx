import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./Month.styled";
import { IMonthProps } from "./MonthTypes";
import { Day } from "components/Day";
import days from "config/days";

export const Month: FC<IMonthProps> = ({ title, year, month }) => {
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
        {days.map((day) => (
          <Day key={day.id} date={day.date} />
        ))}
      </Box>
    </Box>
  );
};
