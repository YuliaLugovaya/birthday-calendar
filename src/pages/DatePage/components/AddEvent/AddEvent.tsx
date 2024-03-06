import React, { FC, useRef, useState } from "react";
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
  useMediaQuery,
} from "@mui/material";
import { styles } from "./AddEvent.styled";
import events from "config/events";
import { useDispatch, useSelector } from "react-redux";
import {
  addEvent,
  updateAdditionalInputs,
  saveEvent,
  clearSpecificEvent,
} from "store/events/eventsActions";
import { AdditionalInputs, EditEventState } from "store/events/eventsTypes";
import years from "config/years";
import { EventModal } from "components/EventModal";
import { Outlet, useNavigate } from "react-router-dom";
import { routes } from "config/routes";

export const AddEvent: FC = () => {
  const dispatch = useDispatch();
  const isEventAdded = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.isEventAdded,
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
  const navigate = useNavigate();

  const handleSaveEvent = () => {
    const newEvent = {
      [`${specificDay.day}${specificDay.month}`]: additionalInputs,
    };

    dispatch(saveEvent(newEvent));
    dispatch(clearSpecificEvent());
    navigate(`${routes.home.root}/${routes.home.date.root}/${specificDay.day}`);
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
    <Box sx={styles.editEventWrapper}>
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
        <Button sx={styles.editEventSave} onClick={handleSaveEvent}>
          Сохранить
        </Button>
      </Box>
    </Box>
  );
};
