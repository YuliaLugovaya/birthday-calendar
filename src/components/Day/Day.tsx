import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./Month.styled";
import { IDayProps } from "./DayTypes";

export const Day: FC<IDayProps> = ({ date }) => {
  let day;
  date[8] === "0" ? (day = date.slice(9)) : (day = date.slice(8));

  return (
    <Box>
      <Typography>{day}</Typography>
    </Box>
  );
};
