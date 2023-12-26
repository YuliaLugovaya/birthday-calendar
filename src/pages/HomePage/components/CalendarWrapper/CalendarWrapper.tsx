import React, { FC } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styles } from "./CalendarWrapper.styled";
import { Calendar } from "../Calendar/Calendar";

export const CalendarWrapper: FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Box sx={styles.calendarWrapper}>
      {isDesktop && (
        <Box sx={styles.calendarContent}>
          <Typography sx={styles.calendarTitle}>
            Дни рождения родных и близких, свадьбы, семейные праздники - все
            важные даты теперь будут сохранены. Просто выбирайте дни календаря и
            отмечайте события, чтобы не забыть подготовиться и придумать
            поздравление.
          </Typography>
        </Box>
      )}
      <Calendar />
    </Box>
  );
};
