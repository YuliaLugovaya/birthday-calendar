import React, { FC, useRef, useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Avatar,
  Typography,
} from "@mui/material";
import { styles } from "./EditEvent.styled";
import { useDispatch, useSelector } from "react-redux";
import { EditEventState } from "store/events/eventsTypes";
import { Outlet, useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import { clearSpecificEvent, updateEvent } from "store/events/eventsActions";
import years from "config/years";

export const EditEvent: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allEvents = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.allEvents,
  );
  const specificEvent = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.specificEvent,
  );
  const specificDay = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.specificDay,
  );
  const handleUpdateEvent = () => {
    // const updatedEvent = { ...specificEvent }; // Создать копию specificEvent
    // updatedEvent[Object.keys(updatedEvent)[0]] = {
    //   ...updatedEvent[Object.keys(updatedEvent)[0]],
    //   name: // Новое значение для name,
    //   socials: // Новое значение для socials,
    // };

    // dispatch(updateEvent(updatedEvent));
    dispatch(clearSpecificEvent());
    navigate(`${routes.home.root}/${routes.home.date.root}/${specificDay.day}`);
  };
  const key = `${specificDay.day}${specificDay.month}`;
  const keyName = specificEvent[0][key];
  const foundEvents = allEvents.filter(
    (event) => Object.keys(event)[0] === key,
  );
  const foundEvent = foundEvents.find((event) => event[key].name === keyName);
  const eventName = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].name
    : "";
  const eventYear = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].year
    : "";
  const eventSocials = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].socials
    : "";
  const eventPhone = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].phone
    : "";
  const eventPhoneMessengers = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].messengers
    : "";
  const eventAddress = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].address
    : "";
  const eventEmail = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].email
    : "";
  const eventTextarea = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].textarea
    : "";

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
          // const updatedInputs = {
          //   ...additionalInputs,
          //   photo,
          // };
          // dispatch(updateAdditionalInputs(updatedInputs));
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
    // const updatedInputs = {
    //   ...additionalInputs,
    //   photo: "",
    // };
    // dispatch(updateAdditionalInputs(updatedInputs));
    setFileUploaded(false);
  };

  return (
    <Box sx={styles.editEventWrapper}>
      <Box sx={styles.editEventChangeWrapper}>
        <Box sx={styles.editEventChangeContainer}>
          <TextField
            placeholder="Имя (фамилия, имя, отчество)"
            value={eventName}
            // onChange={(e) =>
            //   handleAdditionalInputChange(e.target.value, "name")
            // }
            sx={styles.editEventChange}
            required
          />
          <TextField
            select
            sx={styles.editEventChange}
            value={eventYear}
            // onChange={(e) =>
            //   handleAdditionalInputChange(e.target.value, "year")
            // }
          >
            {years.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            placeholder="Ccылка на социальные сети"
            value={eventSocials}
            // onChange={(e) =>
            //   handleAdditionalInputChange(e.target.value, "socials")
            // }
            sx={styles.editEventChange}
          />
          <TextField
            placeholder="Телефон"
            value={eventPhone}
            // onChange={(e) =>
            //   handleAdditionalInputChange(e.target.value, "phone")
            // }
            sx={styles.editEventChange}
          />
          <FormGroup sx={styles.editEventCheckboxWrapper}>
            <FormControlLabel
              control={<Checkbox />}
              label="WhatsApp"
              checked={eventPhoneMessengers.includes("WhatsApp")}
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                // if (target.checked) {
                //   handleAdditionalInputChange("WhatsApp", "messengers");
                // }
              }}
              sx={styles.editEventCheckbox}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Viber"
              checked={eventPhoneMessengers.includes("Viber")}
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                // if (target.checked) {
                //   handleAdditionalInputChange("Viber", "messengers");
                // }
              }}
              sx={styles.editEventCheckbox}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Telegram"
              checked={eventPhoneMessengers.includes("Telegram")}
              onChange={(e) => {
                const target = e.target as HTMLInputElement;
                // if (target.checked) {
                //   handleAdditionalInputChange("Telegram", "messengers");
                // }
              }}
              sx={styles.editEventCheckbox}
            />
          </FormGroup>
        </Box>
        <Box sx={styles.editEventChangeContainer}>
          <TextField
            placeholder="Адрес"
            value={eventAddress}
            // onChange={(e) =>
            //   handleAdditionalInputChange(e.target.value, "address")
            // }
            sx={styles.editEventChange}
          />

          <TextField
            placeholder="E-mail"
            value={eventEmail}
            // onChange={(e) =>
            //   handleAdditionalInputChange(e.target.value, "email")
            // }
            sx={styles.editEventChange}
          />
          <TextField
            placeholder="Дополнительная информация"
            multiline
            value={eventTextarea}
            // onChange={(e) =>
            //   handleAdditionalInputChange(e.target.value, "textarea")
            // }
            sx={styles.editEventChange}
          />
          {fileUploaded && (
            <Box sx={styles.editEventPhotoWrapper}>
              {uploadedPhoto && (
                <Avatar
                  alt={eventName}
                  src={uploadedPhoto}
                  sx={styles.editEventPhoto}
                />
              )}
              <Button onClick={handleDeletePhoto} sx={styles.editEventPhotoAdd}>
                Удалить
              </Button>
            </Box>
          )}
          {!fileUploaded && (
            <>
              <Button sx={styles.editEventPhotoAdd} component="label">
                Добавить фотографию
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    handleFileUpload(e.target.files);
                  }}
                />
              </Button>
              {fileSizeError && (
                <Typography>
                  Файл больше 5 МБ. Пожалуйста, выберите другой файл.
                </Typography>
              )}
            </>
          )}
        </Box>
        <Button sx={styles.editEventSave} onClick={handleUpdateEvent}>
          Сохранить
        </Button>
      </Box>
    </Box>
  );
};
