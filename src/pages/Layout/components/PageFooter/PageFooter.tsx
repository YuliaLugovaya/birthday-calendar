import React, { FC } from "react";
import { Box, Link } from "@mui/material";
import { styles } from "./PageFooter.styled";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";

export const PageFooter: FC = () => {
  const today = new Date();
  const todayDate = format(today, "d MMMM yyyy", { locale: ru });

  return (
    <Box sx={styles.footerWrapper} component="footer">
      <Link
        sx={styles.footerLink}
        href="https://github.com/YuliaLugovaya/birthday-calendar"
        target="_blank"
      >
        GitHub
      </Link>
      <Box>{todayDate}</Box>
    </Box>
  );
};
