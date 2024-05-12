import React, { FC, useState } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { styles } from "./Birthdays.styled";
import { useDispatch, useSelector } from "react-redux";
import { EditEventState, SpecificDay } from "store/events/eventsTypes";
import months from "config/months";
import { EventModal } from "components/EventModal";
import { selectDay, selectEvent } from "store/events/eventsActions";

export const Birthdays: FC = () => {
  const allEvents = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.allEvents,
  );
  const groupedEvents: {
    [key: string]: {
      date: string;
      name: string;
      year: string;
      phone?: string;
      messengers?: string[];
      address?: string;
      socials?: string;
      email?: string;
      textarea?: string;
      photo?: string;
      modifiedMonth?: string;
      month: string;
      key: string;
    }[];
  } = {};
  allEvents.map((event) => {
    const key = Object.keys(event)[0];
    const birthdayName = Object.values(event)[0].name;
    const birthdayYear = Object.values(event)[0].year;
    const birthdayPhone = Object.values(event)[0].phone;
    const birthdayMessengers = Object.values(event)[0].messengers;
    const birthdayAddress = Object.values(event)[0].address;
    const birthdaySocials = Object.values(event)[0].socials;
    const birthdayEmail = Object.values(event)[0].email;
    const birthdayTextarea = Object.values(event)[0].textarea;
    const birthdayPhoto = Object.values(event)[0].photo;
    const [day, month] = key.split("_");
    const monthId = months.find((m) => m.title === month)?.id;

    let modifiedMonth = "";
    if (month.endsWith("ь") || month.endsWith("й")) {
      modifiedMonth = month.slice(0, -1) + "я";
    } else if (month.endsWith("т")) {
      modifiedMonth = month + "а";
    } else {
      modifiedMonth = month;
    }
    modifiedMonth =
      modifiedMonth.charAt(0).toLowerCase() + modifiedMonth.slice(1);

    if (!monthId) return;
    if (!groupedEvents[monthId]) {
      groupedEvents[monthId] = [];
    }
    groupedEvents[monthId].push({
      date: day,
      name: birthdayName,
      year: birthdayYear,
      phone: birthdayPhone,
      messengers: birthdayMessengers,
      address: birthdayAddress,
      socials: birthdaySocials,
      email: birthdayEmail,
      textarea: birthdayTextarea,
      photo: birthdayPhoto,
      modifiedMonth: modifiedMonth,
      month: month,
      key: key,
    });
  });

  const orderedMonths = months.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  const [openModal, setOpenModal] = useState<{ [eventName: string]: boolean }>(
    {},
  );
  const modalOpen = (eventName: string) => {
    setOpenModal((prev) => ({
      ...prev,
      [eventName]: true,
    }));
  };
  const modalClose = (eventName: string) => {
    setOpenModal((prev) => ({
      ...prev,
      [eventName]: false,
    }));
  };

  const dispatch = useDispatch();
  const addSpecificDay = (day: string, month: string, year: string) => {
    const updatedDay: SpecificDay = {
      day,
      month,
      year,
    };
    dispatch(selectDay(updatedDay));
  };

  const handleClick = (
    key: string,
    name: string,
    date: string,
    month: string,
    year: string,
  ) => {
    modalOpen(name);
    const specificEvent = {
      [`${key}`]: name,
    };
    dispatch(selectEvent(specificEvent));
    addSpecificDay(date, month, year);
  };

  return (
    <Box sx={styles.birthdaysContainer}>
      {orderedMonths.map(({ id, title }) => (
        <Box key={id} sx={styles.birthdaysItems}>
          <Typography sx={styles.birthdaysMonth}>{title}</Typography>
          <List>
            {groupedEvents[id] &&
              groupedEvents[id].map((event) => (
                <ListItem
                  key={event.date}
                  sx={styles.birthdaysItem}
                  onClick={() =>
                    handleClick(
                      event.key,
                      event.name,
                      event.date,
                      event.month,
                      event.year,
                    )
                  }
                >
                  <Typography>
                    {event.date}: {event.name}
                  </Typography>
                  <EventModal
                    openModal={openModal[event.name]}
                    modalClose={() => modalClose(event.name)}
                    name={event.name}
                    year={event.year}
                    phone={event.phone}
                    messengers={event.messengers}
                    address={event.address}
                    socials={event.socials}
                    email={event.email}
                    textarea={event.textarea}
                    photo={event.photo}
                    day={event.date}
                    modifiedMonth={event.modifiedMonth}
                  />
                </ListItem>
              ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};
