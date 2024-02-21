import React, { Suspense, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./DayEvents.styled";
import events from "config/events";
import { useDispatch, useSelector } from "react-redux";
import {
  addEvent,
  updateAdditionalInputs,
  saveEvent,
  clearEvent,
  selectEvent,
} from "store/events/eventsActions";
import {
  AdditionalInputs,
  EditEventState,
  SpecificDay,
} from "store/events/eventsTypes";
import years from "config/years";
import { EventModal } from "components/EventModal";
import { Outlet, useNavigate } from "react-router-dom";
import { routes } from "config/routes";

export const DayEvents = () => {
  const dispatch = useDispatch();
  const isEventAdded = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.isEventAdded,
  );
  const selectedEvent = useSelector(
    (rootReducer: { event: EditEventState }) =>
      rootReducer.event.additionalInputs.selectedEvent,
  );

  const additionalInputs = useSelector(
    (rootReducer: { event: EditEventState }) =>
      rootReducer.event.additionalInputs,
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
    dispatch(addEvent("Выберите событие"));
    navigate(
      `${routes.home.root}/${routes.home.date.root}/${specificDay.day}/${routes.home.date.addEvent}`,
    );
  };

  const handleAdditionalInputChange = (value: string, key: string) => {
    let updatedInputs: AdditionalInputs;
    if (key === "messengers") {
      updatedInputs = {
        ...additionalInputs,
        [key]: [...additionalInputs.messengers, value],
      };
    } else {
      updatedInputs = {
        ...additionalInputs,
        [key]: value,
      };
    }
    dispatch(updateAdditionalInputs(updatedInputs));
  };

  const handleSaveEvent = () => {
    const newEvent = {
      [`${specificDay.day}${specificDay.month}`]: additionalInputs,
    };

    dispatch(saveEvent(newEvent));
    dispatch(clearEvent());
  };

  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileSizeError, setFileSizeError] = useState(false);
  const [photoName, setPhotoName] = useState("");
  const [uploadedPhoto, setUploadedPhoto] = useState("");

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      const fileSizeLimit = 5 * 1024 * 1024;
      const file = files[0];
      if (file.size <= fileSizeLimit) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const photo = e.target?.result as string;
          const updatedInputs = {
            ...additionalInputs,
            photo,
          };
          dispatch(updateAdditionalInputs(updatedInputs));
          setUploadedPhoto(photo);
        };
        reader.readAsDataURL(file);
        const fileName = file.name;
        setFileUploaded(true);
        setPhotoName(fileName);
        setFileSizeError(false);
      } else {
        setFileSizeError(true);
        setFileUploaded(false);
      }
    }
  };

  const handleDeletePhoto = () => {
    const updatedInputs = {
      ...additionalInputs,
      photo: "",
    };
    dispatch(updateAdditionalInputs(updatedInputs));
    setFileUploaded(false);
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
    const data = Object.keys(event)[0];
    const handleSelectEvent = () => {
      const specificEvent = {
        [`${data}`]: event[data].name,
      };
      dispatch(selectEvent(specificEvent));
      modalOpen(event[data].name);
    };
    if (data === `${specificDay.day}${specificDay.month}`) {
      return (
        <Box key={event[data].name}>
          <Button
            onClick={handleSelectEvent}
            sx={{
              ...styles.editAddedEvents,
              border: "1px solid",
              borderColor: "color.green",
              bgcolor: event[data].selectedEvent
                ? "color.yellowLight"
                : "color.green",
              color: "text.primary",
              "&:hover": {
                bgcolor: "color.green",
                color: "text.secondary",
              },
            }}
          >
            {event[data].photo ? (
              <Avatar alt={event[data].name} src={event[data].photo} />
            ) : (
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: event[data].selectedEvent
                    ? "color.yellow"
                    : "color.green",
                }}
              >
                <Typography sx={{ textTransform: "uppercase", color: "#fff" }}>
                  {event[data].name.charAt(0)}
                </Typography>
              </Box>
            )}
            <Box>
              <Typography>{event[data].name}</Typography>
              <Typography>{event[data].selectedEvent}</Typography>
            </Box>
          </Button>
          <EventModal
            openModal={openModal[event[data].name]}
            modalClose={() => modalClose(event[data].name)}
            name={event[data].name}
            year={event[data].year}
            phone={event[data].phone}
            messengers={event[data].messengers}
            address={event[data].address}
            socials={event[data].socials}
            email={event[data].email}
            textarea={event[data].textarea}
            photo={event[data].photo}
            selectedEvent={event[data].selectedEvent}
            day={specificDay.day}
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
          <Box>{allEvents.map((event) => renderEvent(event))}</Box>
          <Button onClick={handleAddEvent} sx={styles.editEventAdd}>
            Добавить событие
          </Button>
        </Box>
      )}
    </Box>
  );
};
