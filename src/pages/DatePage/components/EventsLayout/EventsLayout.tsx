import React, { FC, Suspense } from "react";
import { Box, CardMedia, Drawer, Typography } from "@mui/material";
import { styles } from "./EventsLayout.styled";
import { IEventsLayoutProps } from "./EventsLayoutTypes";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Outlet } from "react-router-dom";
import { clearEvent, clearSpecificEvent } from "store/events/eventsActions";
import close from "assets/images/png/close.png";
import { useDispatch, useSelector } from "react-redux";
import { EditEventState } from "store/events/eventsTypes";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";

export const EventsLayout: FC<IEventsLayoutProps> = ({
  isDrawerOpen,
  toggleDrawer,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const handleClearEvent = () => {
    dispatch(clearEvent());
    dispatch(clearSpecificEvent());
    toggleDrawer();
    navigate(`${routes.home.root}/${routes.home.calendar}`);
  };
  const specificDay = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.specificDay,
  );
  let modifiedMonth = "";
  if (specificDay.month.endsWith("ь") || specificDay.month.endsWith("й")) {
    modifiedMonth = specificDay.month.slice(0, -1) + "я";
  } else if (specificDay.month.endsWith("т")) {
    modifiedMonth = specificDay.month + "а";
  } else {
    modifiedMonth = specificDay.month;
  }
  modifiedMonth =
    modifiedMonth.charAt(0).toLowerCase() + modifiedMonth.slice(1);

  return (
    <Drawer
      anchor={isLargeScreen ? "top" : "left"}
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={styles.editEventContainer}
    >
      <Box sx={styles.editEventHeader}>
        <CardMedia
          sx={styles.editEventIconClose}
          component="img"
          image={close}
          alt="Close"
          onClick={handleClearEvent}
        />
        <Box sx={styles.editEventContant}>
          <Typography sx={styles.editEventTitle}>
            {specificDay.day} {modifiedMonth}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.editEventBody}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </Drawer>
  );
};
