import React, { FC } from "react";
import { Box, Link, Button } from "@mui/material";
import { styles } from "./PageFooter.styled";
import { useDispatch } from "react-redux";
// import { resetBallState } from "store/ball/ballActions";
// import { resetTaskState } from "store/task/taskActions";
// import { resetEditState } from "store/edit/editActions";

export const PageFooter: FC = () => {
  // const dispatch = useDispatch();
  // const handleReset = () => {
  //   window.localStorage.clear();
  //   dispatch(resetBallState());
  //   dispatch(resetTaskState());
  //   dispatch(resetEditState());
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  return (
    <Box sx={styles.footerWrapper} component="footer">
      <Link
        sx={styles.footerLink}
        href="https://github.com/YuliaLugovaya/event-calendar"
        target="_blank"
      >
        GitHub
      </Link>
    </Box>
  );
};
