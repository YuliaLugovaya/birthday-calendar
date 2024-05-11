import React, { FC } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { styles } from "./Birthdays.styled";
import { useSelector } from "react-redux";
import { EditEventState } from "store/events/eventsTypes";
import { useNavigate } from "react-router-dom";
import months from "config/months";

export const Birthdays: FC = () => {
  const allEvents = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.allEvents,
  );
  const filteredEvents = allEvents.filter((event) => {
    const key = Object.keys(event)[0];
    const [, monthTitle] = key.split("_");
    return months.some((month) => month.title === monthTitle);
  });

  const groupedEvents: { [key: string]: { date: string; name: string }[] } = {};
  filteredEvents.forEach((event) => {
    const key = Object.keys(event)[0];
    const birthdayName = Object.values(event)[0].name;
    const [day, monthTitle] = key.split("_");
    const monthId = months.find((month) => month.title === monthTitle)?.id;

    if (!monthId) return;

    if (!groupedEvents[monthId]) {
      groupedEvents[monthId] = [];
    }
    groupedEvents[monthId].push({ date: day, name: birthdayName });
  });

  const orderedMonths = months
    .filter((month) => groupedEvents[month.id])
    .sort((a, b) => parseInt(a.id) - parseInt(b.id));

  return (
    <Box sx={styles.birthdaysContainer}>
      {orderedMonths.map(({ id, title }) => (
        <Box key={id}>
          <Typography>{title}</Typography>
          <List>
            {groupedEvents[id] &&
              groupedEvents[id].map((event) => (
                <ListItem key={event.name}>
                  <Typography>
                    {event.date}: {event.name}
                  </Typography>
                </ListItem>
              ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};
