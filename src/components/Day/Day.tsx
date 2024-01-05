import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import { styles } from "./Day.styled";
import { IDayProps } from "./DayTypes";
import { isSameDay } from "date-fns";

export const Day: FC<IDayProps> = ({ date }) => {
  let day;
  date[8] === "0" ? (day = date.slice(9)) : (day = date.slice(8));

  const currentDate = new Date();
  const isToday = isSameDay(currentDate, new Date(date));

  return (
    <Button
      sx={{
        ...styles.dayContainer,
        bgcolor: isToday ? "color.greenLight" : "text.secondary",
      }}
    >
      <Typography>{day}</Typography>
    </Button>
  );
};
