import React, { FC } from "react";
import { Button, Typography } from "@mui/material";
import { styles } from "./Day.styled";
import { IDayProps } from "./DayTypes";

export const Day: FC<IDayProps> = ({ date }) => {
  let day;
  date[8] === "0" ? (day = date.slice(9)) : (day = date.slice(8));

  return (
    <Button sx={styles.dayContainer}>
      <Typography>{day}</Typography>
    </Button>
  );
};
