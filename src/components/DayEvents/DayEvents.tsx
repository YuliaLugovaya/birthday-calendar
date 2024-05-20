import React, { Suspense, useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { styles } from "./DayEvents.styled";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, selectEvent } from "store/events/eventsActions";
import { EditEventState } from "store/events/eventsTypes";
import { EventModal } from "components/EventModal";
import { Outlet, useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import months from "config/months";

export const DayEvents = () => {
  const dispatch = useDispatch();
  const isEventAdded = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.isEventAdded,
  );

  const allEvents = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.allEvents,
  );

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

  const navigate = useNavigate();
  const handleAddEvent = () => {
    const numericMonth =
      months.find((item) => item.title === specificDay.month)?.month || "";
    dispatch(addEvent("Выберите событие"));
    navigate(
      `${routes.home.root}/${routes.home.date.root}/${specificDay.day}-${numericMonth}/${routes.home.date.addEvent}`,
    );
  };

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

  const renderEvent = (event: {
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
    const data = Object.keys(event)[0];
    const handleSelectEvent = () => {
      const specificEvent = {
        [`${data}`]: event[data].id,
      };
      dispatch(selectEvent(specificEvent));
      modalOpen(event[data].id);
    };
    if (data === `${specificDay.day}_${specificDay.month}`) {
      return (
        <Box key={event[data].id}>
          <Button
            onClick={handleSelectEvent}
            sx={{
              ...styles.editAddedEvents,
              border: "1px solid",
              borderColor: "color.green",
              bgcolor: "color.yellowLight",
              color: "text.primary",
              "&:hover": {
                bgcolor: "color.green",
                color: "text.secondary",
              },
            }}
          >
            {event[data].photo ? (
              <Avatar
                alt={event[data].name}
                src={event[data].photo}
                sx={styles.editAddedPhoto}
              />
            ) : (
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "color.yellow",
                }}
              >
                <Typography sx={{ textTransform: "uppercase", color: "#fff" }}>
                  {event[data].name
                    .trim()
                    .split(" ")
                    .map((word) => word.charAt(0))
                    .join("")}
                </Typography>
              </Box>
            )}
            <Box>
              <Typography>{event[data].name}</Typography>
            </Box>
          </Button>
          <EventModal
            openModal={openModal[event[data].id]}
            modalClose={() => modalClose(event[data].id)}
            id={event[data].id}
            name={event[data].name}
            year={event[data].year}
            phone={event[data].phone}
            messengers={event[data].messengers}
            address={event[data].address}
            socials={event[data].socials}
            email={event[data].email}
            textarea={event[data].textarea}
            photo={event[data].photo}
            day={specificDay.day}
            month={specificDay.month}
            modifiedMonth={modifiedMonth}
          />
        </Box>
      );
    } else {
      return null;
    }
  };

  return (
    <Box sx={styles.editEventWrapper}>
      {isEventAdded ? (
        <Box>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
      ) : (
        <Box sx={styles.editAllEvents}>
          <Button onClick={handleAddEvent} sx={styles.editEventAdd}>
            Добавить день рождения
          </Button>
          <Box sx={styles.editAddedEventsWrapper}>
            {allEvents.map((event) => renderEvent(event))}
          </Box>
        </Box>
      )}
    </Box>
  );
};
