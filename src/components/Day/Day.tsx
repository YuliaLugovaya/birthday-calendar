import React, { FC, useState } from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { styles } from "./Day.styled";
import { IDayProps } from "./DayTypes";
import { isSameDay } from "date-fns";
import { EditEvent } from "components/EditEvent";
import { EditEventState } from "store/events/eventsTypes";
import { useSelector } from "react-redux";
import birthday from "assets/images/png/birthday-cake.png";
import holiday from "assets/images/png/calendar.png";
import eventOther from "assets/images/png/stars.png";

export const Day: FC<IDayProps> = ({ date, month, year }) => {
  let day: string;
  date[8] === "0" ? (day = date.slice(9)) : (day = date.slice(8));

  const currentDate = new Date();
  const isToday = isSameDay(currentDate, new Date(date));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const allEvents = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.allEvents,
  );

  const renderEvent = (events: {
    [key: string]: {
      name: string;
      year?: string;
      phone?: string;
      messengers?: string[];
      address?: string;
      socials?: string;
      email?: string;
      textarea?: string;
      photo?: string;
      selectedEvent: string;
    };
  }) => {
    return Object.entries(events).map(([key, event]) => {
      if (key.startsWith(day + month)) {
        if (event.selectedEvent === "День рождения") {
          return (
            <Box key={event.name}>
              <CardMedia
                component="img"
                alt="birthday"
                image={birthday}
                sx={styles.eventIcon}
              ></CardMedia>
            </Box>
          );
        } else if (event.selectedEvent === "Международный праздник") {
          return (
            <Box key={event.name}>
              <CardMedia
                component="img"
                alt="holiday"
                image={holiday}
                sx={styles.eventIcon}
              ></CardMedia>
            </Box>
          );
        } else if (event.selectedEvent === "Другое") {
          return (
            <Box key={event.name}>
              <CardMedia
                component="img"
                alt="eventOther"
                image={eventOther}
                sx={styles.eventIcon}
              ></CardMedia>
            </Box>
          );
        }
      }
      return null;
    });
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
        <Box sx={styles.eventIconsWrapper}>
          {allEvents.map((event) => renderEvent(event))}
        </Box>
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
