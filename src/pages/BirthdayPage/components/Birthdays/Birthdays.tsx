import React, { FC } from "react";
import { Box } from "@mui/material";
import { styles } from "./Birthdays.styled";

export const Birthdays: FC = () => {
  return <Box sx={styles.birthdaysContainer}>Все Дни рождения</Box>;
};
