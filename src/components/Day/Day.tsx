import React, { FC } from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { styles } from "./Day.styled";
import { IDayProps } from "./DayTypes";
import { isSameDay } from "date-fns";
import { EditEventState, SpecificDay } from "store/events/eventsTypes";
import { useDispatch, useSelector } from "react-redux";
import birthday from "assets/images/png/birthday-cake.png";
import { routes } from "config/routes";
import { selectDay } from "store/events/eventsActions";
import { useNavigate } from "react-router-dom";
import months from "config/months";

export const Day: FC<IDayProps> = ({ date, month, year }) => {
  let day: string;
  date[8] === "0" ? (day = date.slice(9)) : (day = date.slice(8));
  const currentDate = new Date();
  const isToday = isSameDay(currentDate, new Date(date));
  const dispatch = useDispatch();
  const allEvents = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.allEvents,
  );
  let hasBirthday = false;
  const renderEvent = (events: {
    [key: string]: {
      id: string;
      name: string;
      year?: string;
      phone?: string;
      messengers?: string[];
      address?: string;
      socials?: string;
      email?: string;
      textarea?: string;
      photo?: string;
    };
  }) => {
    return Object.entries(events).map(([key, event]) => {
      if (key.startsWith(day + "_" + month) && !hasBirthday) {
        hasBirthday = true;
        return (
          <Box key={event.id}>
            <CardMedia
              component="img"
              alt="birthday"
              image={birthday}
              sx={styles.eventIcon}
            ></CardMedia>
          </Box>
        );
      }
      return null;
    });
  };

  const navigate = useNavigate();
  const addSpecificDay = (day: string, month: string, year: string) => {
    const numericMonth =
      months.find((item) => item.title === month)?.month || "";
    const updatedDay: SpecificDay = {
      day,
      month,
      year,
    };
    dispatch(selectDay(updatedDay));
    navigate(
      `${routes.home.root}/${routes.home.date.root}/${day}-${numericMonth}`,
    );
  };

  return (
    <>
      <Button
        onClick={() => addSpecificDay(day, month, year)}
        sx={{
          ...styles.dayContainer,
          bgcolor: isToday ? "color.greenLight" : "text.secondary",
        }}
      >
        <Typography sx={styles.dayText}>{day}</Typography>
        <Box sx={styles.eventIconsWrapper}>
          {allEvents.map((event) => renderEvent(event))}
        </Box>
      </Button>
    </>
  );
};
