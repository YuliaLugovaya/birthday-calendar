import React, { FC, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./AddEvent.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAdditionalInputs,
  saveEvent,
  clearSpecificEvent,
} from "store/events/eventsActions";
import { AdditionalInputs, EditEventState } from "store/events/eventsTypes";
import years from "config/years";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import months from "config/months";

export const AddEvent: FC = () => {
  const dispatch = useDispatch();
  const additionalInputs = useSelector(
    (rootReducer: { event: EditEventState }) =>
      rootReducer.event.additionalInputs,
  );
  const specificDay = useSelector(
    (rootReducer: { event: EditEventState }) => rootReducer.event.specificDay,
  );

  const handleAdditionalInputChange = (value: string, key: string) => {
    let updatedMessengers: string[] = [...additionalInputs.messengers];

    if (key === "messengers") {
      if (!updatedMessengers.includes(value)) {
        updatedMessengers.push(value);
      } else {
        updatedMessengers = updatedMessengers.filter(
          (messenger) => messenger !== value,
        );
      }
    }

    const updatedInputs: AdditionalInputs = {
      ...additionalInputs,
      id: `${specificDay.day}_${specificDay.month}_${
        Math.floor(Math.random() * 100) + 1
      }${Math.floor(Math.random() * 100) + 1}`,
      [key]: key === "messengers" ? updatedMessengers : value,
    };

    dispatch(updateAdditionalInputs(updatedInputs));
  };
  const navigate = useNavigate();

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const numericMonth =
    months.find((item) => item.title === specificDay.month)?.month || "";

  const handleSaveEvent = () => {
    const isValidEmail = (email: string): boolean => {
      const emailPattern = /^[^s@]+@[^s@]+\.[^s@]+$/;
      return emailPattern.test(email);
    };
    if (!additionalInputs.name) {
      setNameError(true);
    } else if (
      additionalInputs.email &&
      !isValidEmail(additionalInputs.email)
    ) {
      setEmailError(true);
    } else {
      setNameError(false);
      setEmailError(false);
      const newEvent = {
        [`${specificDay.day}_${specificDay.month}`]: additionalInputs,
      };

      dispatch(saveEvent(newEvent));
      dispatch(clearSpecificEvent());
      navigate(
        `${routes.home.root}/${routes.home.date.root}/${specificDay.day}-${numericMonth}`,
      );
    }
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

  const goBack = () => {
    dispatch(clearSpecificEvent());
    navigate(
      `${routes.home.root}/${routes.home.date.root}/${specificDay.day}-${numericMonth}`,
    );
  };

  return (
    <Box sx={styles.editEventChangeWrapper}>
      <Box sx={styles.editEventChangeFormContainer} component="form" noValidate>
        <Box sx={styles.editEventChangeContainer}>
          <TextField
            placeholder="Имя (фамилия, имя, отчество)"
            value={additionalInputs.name}
            onChange={(e) => {
              handleAdditionalInputChange(e.target.value, "name");
              if (nameError) {
                setNameError(false);
              }
            }}
            sx={{
              ...styles.editEventChange,
              borderColor: nameError ? "color.coral" : "color.green",
            }}
            error={nameError}
            helperText={nameError ? "Введите имя." : ""}
            required
          />
          <FormControl sx={styles.editEventChange}>
            <Select
              value={additionalInputs.year}
              onChange={(e) =>
                handleAdditionalInputChange(e.target.value, "year")
              }
              displayEmpty
            >
              <MenuItem value="">
                <Typography sx={styles.addEventPlaceholder}>
                  Год рождения
                </Typography>
              </MenuItem>
              {years.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
            value={additionalInputs.phone}
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
              onChange={(e) =>
                handleAdditionalInputChange("WhatsApp", "messengers")
              }
              sx={styles.editEventCheckbox}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Viber"
              checked={additionalInputs.messengers.includes("Viber")}
              onChange={(e) =>
                handleAdditionalInputChange("Viber", "messengers")
              }
              sx={styles.editEventCheckbox}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Telegram"
              checked={additionalInputs.messengers.includes("Telegram")}
              onChange={(e) =>
                handleAdditionalInputChange("Telegram", "messengers")
              }
              sx={styles.editEventCheckbox}
            />
          </FormGroup>
        </Box>
        <Box sx={styles.editEventChangeContainer}>
          <TextField
            placeholder="Адрес"
            value={additionalInputs.address}
            onChange={(e) =>
              handleAdditionalInputChange(e.target.value, "address")
            }
            sx={styles.editEventChange}
          />
          <TextField
            placeholder="E-mail"
            value={additionalInputs.email}
            onChange={(e) => {
              handleAdditionalInputChange(e.target.value, "email");
              if (emailError) {
                setEmailError(false);
              }
            }}
            sx={{
              ...styles.editEventChange,
              borderColor: emailError ? "color.coral" : "color.green",
            }}
            error={emailError}
            helperText={
              emailError
                ? "E-mail должен содержать символ @, иметь доменное имя и расширение, разделенные точкой, и не содержать пробелов или специальных символов в имени пользователя."
                : ""
            }
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
                Удалить фото
              </Button>
            </Box>
          )}
          {!fileUploaded && (
            <>
              <Button sx={styles.editEventPhotoAdd} component="label">
                Добавить фото
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
      <Box sx={styles.editEventButtons}>
        <Button sx={styles.editEventSave} onClick={handleSaveEvent}>
          Сохранить
        </Button>
        <Button sx={styles.editEventBack} onClick={goBack}>
          Вернуться назад
        </Button>
      </Box>
    </Box>
  );
};
