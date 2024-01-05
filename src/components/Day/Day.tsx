import React, { FC, useState } from "react";
import { Button, Typography } from "@mui/material";
import { styles } from "./Day.styled";
import { IDayProps } from "./DayTypes";
import { isSameDay } from "date-fns";
import { EditEvent } from "components/EditEvent";

export const Day: FC<IDayProps> = ({ date, month, year }) => {
  let day;
  date[8] === "0" ? (day = date.slice(9)) : (day = date.slice(8));

  const currentDate = new Date();
  const isToday = isSameDay(currentDate, new Date(date));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        onClick={toggleDrawer}
        sx={{
          ...styles.dayContainer,
          bgcolor: isToday ? "color.greenLight" : "text.secondary",
        }}
      >
        <Typography>{day}</Typography>
      </Button>
      <EditEvent
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        day={day}
        month={month}
        year={year}
      />
    </>
  );
};
