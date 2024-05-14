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
      day: string;
      id: string;
      name: string;
      year: string;
      phone: string;
      messengers: string[];
      address: string;
      socials: string;
      email: string;
      textarea: string;
      photo: string;
      modifiedMonth: string;
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
    const birthdayId = Object.values(event)[0].id;
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
      day: day,
      id: birthdayId,
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

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [socials, setSocials] = useState("");
  const [phone, setPhone] = useState("");
  const [messengers, setMessengers] = useState([""]);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [photo, setPhoto] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [modifiedMonth, setModifiedMonth] = useState("");

  const handleClick = (
    key: string,
    day: string,
    month: string,
    year: string,
    id: string,
    name: string,
    phone: string,
    messengers: string[],
    address: string,
    socials: string,
    email: string,
    textarea: string,
    photo: string,
    modifiedMonth: string,
  ) => {
    setId(id);
    setDay(day);
    setName(name);
    setYear(year);
    setSocials(socials);
    setPhone(phone);
    setMessengers(messengers);
    setAddress(address);
    setEmail(email);
    setTextarea(textarea);
    setPhoto(photo);
    setMonth(month);
    setModifiedMonth(modifiedMonth);
    const specificEvent = {
      [`${key}`]: id,
    };
    dispatch(selectEvent(specificEvent));
    addSpecificDay(day, month, year);
    modalOpen(id);
  };

  return (
    <Box sx={styles.birthdaysContainer}>
      {orderedMonths.map(({ id, title }) => (
        <Box key={id} sx={styles.birthdaysItems}>
          <Typography sx={styles.birthdaysMonth}>{title}</Typography>
          <List>
            {groupedEvents[id] &&
              groupedEvents[id]
                .sort((a, b) => parseInt(a.day) - parseInt(b.day))
                .map((event) => (
                  <ListItem
                    key={event.id}
                    sx={styles.birthdaysItem}
                    onClick={() =>
                      handleClick(
                        event.key,
                        event.day,
                        event.month,
                        event.year,
                        event.id,
                        event.name,
                        event.phone,
                        event.messengers,
                        event.address,
                        event.socials,
                        event.email,
                        event.textarea,
                        event.photo,
                        event.modifiedMonth,
                      )
                    }
                  >
                    <Box sx={styles.birthdaysPerson}>
                      <Typography sx={styles.birthdaysDay}>
                        {event.day}
                      </Typography>{" "}
                      <Typography sx={styles.birthdaysName}>
                        {event.name}
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
          </List>
        </Box>
      ))}
      <EventModal
        openModal={openModal[id]}
        modalClose={() => modalClose(id)}
        id={id}
        name={name}
        year={year}
        phone={phone}
        messengers={messengers}
        address={address}
        socials={socials}
        email={email}
        textarea={textarea}
        photo={photo}
        day={day}
        month={month}
        modifiedMonth={modifiedMonth}
      />
    </Box>
  );
};
