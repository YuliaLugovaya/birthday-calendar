import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./Month.styled";
import { IDayProps } from "./DayTypes";

export const Day: FC<IDayProps> = ({ date }) => {
  return (
    <Box>
      <Typography>{date}</Typography>
    </Box>
  );
};
