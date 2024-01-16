import React, { FC, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./EditEvent.styled";
import { IEditEventProps } from "./EditEventTypes";
import close from "assets/images/png/close.png";
import events from "config/events";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, updateAdditionalInputs } from "store/events/eventsActions";
import { AdditionalInputs, EditEventState } from "store/events/eventsTypes";
import years from "config/years";

export const EditEvent: FC<IEditEventProps> = ({
  isDrawerOpen,
  toggleDrawer,
  day,
  month,
  year,
}) => {
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

  const dispatch = useDispatch();
  const isEventAdded = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.isEventAdded,
  );
  const selectedEvent = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.selectedEvent,
  );

  const additionalInputs = useSelector(
    (rootReducer: { event: EditEventState }) =>
      rootReducer.event.additionalInputs,
  );

  const handleAddEvent = () => {
    dispatch(addEvent("Выберите событие"));
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

  return (
    <Drawer
      anchor="top"
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
          onClick={toggleDrawer}
        />
        <Box sx={styles.editEventContant}>
          <Typography sx={styles.editEventTitle}>
            {day} {modifiedMonth} {year}
          </Typography>
        </Box>
      </Box>

      <Box sx={styles.editEventWrapper}>
        {isEventAdded ? (
          <>
            <TextField
              select
              sx={styles.editEventChoice}
              value={selectedEvent}
              onChange={(e) => dispatch(addEvent(e.target.value))}
            >
              {events.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {selectedEvent === "День рождения" && (
              <Box sx={styles.editEventChangeWrapper}>
                <Box sx={styles.editEventChangeContainer}>
                  <TextField
                    placeholder="Имя (фамилия, имя, отчество)"
                    value={additionalInputs.name || ""}
                    onChange={(e) =>
                      handleAdditionalInputChange(e.target.value, "name")
                    }
                    sx={styles.editEventChange}
                    required
                  />
                  <TextField
                    select
                    sx={styles.editEventChange}
                    value={additionalInputs.year || "Выберите год рождения"}
                    onChange={(e) =>
                      handleAdditionalInputChange(e.target.value, "year")
                    }
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
                    value={additionalInputs.socials}
                    onChange={(e) =>
                      handleAdditionalInputChange(e.target.value, "socials")
                    }
                    sx={styles.editEventChange}
                  />
                  <TextField
                    placeholder="Телефон"
                    value={additionalInputs.phone || ""}
                    onChange={(e) =>
                      handleAdditionalInputChange(e.target.value, "phone")
                    }
                    sx={styles.editEventChange}
                  />
                  <FormGroup sx={styles.editEventCheckboxWrapper}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="WhatsApp"
                      checked={additionalInputs.messengers.includes("WhatsApp")}
                      onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (target.checked) {
                          handleAdditionalInputChange("WhatsApp", "messengers");
                        }
                      }}
                      sx={styles.editEventCheckbox}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Viber"
                      checked={additionalInputs.messengers.includes("Viber")}
                      onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (target.checked) {
                          handleAdditionalInputChange("Viber", "messengers");
                        }
                      }}
                      sx={styles.editEventCheckbox}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Telegram"
                      checked={additionalInputs.messengers.includes("Telegram")}
                      onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (target.checked) {
                          handleAdditionalInputChange("Telegram", "messengers");
                        }
                      }}
                      sx={styles.editEventCheckbox}
                    />
                  </FormGroup>
                </Box>
                <Box sx={styles.editEventChangeContainer}>
                  <TextField
                    placeholder="Адрес"
                    value={additionalInputs.address || ""}
                    onChange={(e) =>
                      handleAdditionalInputChange(e.target.value, "address")
                    }
                    sx={styles.editEventChange}
                  />

                  <TextField
                    placeholder="E-mail"
                    value={additionalInputs.email}
                    onChange={(e) =>
                      handleAdditionalInputChange(e.target.value, "email")
                    }
                    sx={styles.editEventChange}
                  />
                  <TextField
                    placeholder="Дополнительная информация"
                    multiline
                    value={additionalInputs.textarea}
                    onChange={(e) =>
                      handleAdditionalInputChange(e.target.value, "textarea")
                    }
                    sx={styles.editEventChange}
                  />
                  {fileUploaded && (
                    <Box sx={styles.editEventPhotoWrapper}>
                      {uploadedPhoto && (
                        <Avatar
                          alt={additionalInputs.name}
                          src={uploadedPhoto}
                          sx={styles.editEventPhoto}
                        />
                      )}
                      <Button
                        onClick={handleDeletePhoto}
                        sx={styles.editEventPhotoAdd}
                      >
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
              </Box>
            )}
            {selectedEvent === "Свадьба" && <TextField label="Список имен" />}
            {selectedEvent === "Международные праздники" && (
              <TextField label="Название" />
            )}
            {selectedEvent === "Другое" && <TextField label="Название" />}
            <Button sx={styles.editEventSave}>Сохранить</Button>
          </>
        ) : (
          <>
            <Button onClick={handleAddEvent} sx={styles.editEventAdd}>
              Добавить событие
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
};
