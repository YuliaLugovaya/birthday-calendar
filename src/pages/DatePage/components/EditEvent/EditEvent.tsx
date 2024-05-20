import React, { FC, useEffect, useState } from "react";
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
  FormControl,
  Select,
} from "@mui/material";
import { styles } from "./EditEvent.styled";
import { useDispatch, useSelector } from "react-redux";
import { EditEventState } from "store/events/eventsTypes";
import { useNavigate } from "react-router-dom";
import { routes } from "config/routes";
import { clearSpecificEvent, updateEvent } from "store/events/eventsActions";
import years from "config/years";
import months from "config/months";

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
  const key = `${specificDay.day}_${specificDay.month}`;
  const keyId = specificEvent[0][key];
  const foundEvents = allEvents.filter(
    (event) => Object.keys(event)[0] === key,
  );
  const foundEvent = foundEvents.find((event) => event[key].id === keyId);
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
    : [""];
  const eventAddress = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].address
    : "";
  const eventEmail = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].email
    : "";
  const eventTextarea = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].textarea
    : "";
  const eventPhoto = foundEvent
    ? foundEvent[Object.keys(foundEvent)[0]].photo
    : "";
  const eventId = foundEvent ? foundEvent[Object.keys(foundEvent)[0]].id : "";

  const [id, setId] = useState(eventId);
  const [name, setName] = useState(eventName);
  const [year, setYear] = useState(eventYear);
  const [socials, setSocials] = useState(eventSocials);
  const [phone, setPhone] = useState(eventPhone);
  const [messengers, setMessengers] = useState(eventPhoneMessengers);
  const [address, setAddress] = useState(eventAddress);
  const [email, setEmail] = useState(eventEmail);
  const [textarea, setTextarea] = useState(eventTextarea);
  const [photo, setPhoto] = useState(eventPhoto);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const numericMonth =
    months.find((item) => item.title === specificDay.month)?.month || "";

  const handleUpdateEvent = () => {
    dispatch(
      updateEvent({
        id,
        name,
        year,
        socials,
        phone,
        messengers,
        address,
        email,
        textarea,
        photo,
      }),
    );
    const isValidEmail = (email: string): boolean => {
      const emailPattern = /^[^s@]+@[^s@]+\.[^s@]+$/;
      return emailPattern.test(email);
    };
    if (!name) {
      setNameError(true);
    } else if (email && !isValidEmail(email)) {
      setEmailError(true);
    } else {
      setNameError(false);
      setEmailError(false);
      setId(id);
      setName("");
      setYear("");
      setSocials("");
      setPhone("");
      setMessengers([""]);
      setAddress("");
      setEmail("");
      setTextarea("");
      setPhoto("");
      dispatch(clearSpecificEvent());
      navigate(
        `${routes.home.root}/${routes.home.date.root}/${specificDay.day}-${numericMonth}`,
      );
    }
  };

  const goBack = () => {
    dispatch(clearSpecificEvent());
    navigate(
      `${routes.home.root}/${routes.home.date.root}/${specificDay.day}-${numericMonth}`,
    );
  };

  useEffect(() => {
    setName(eventName);
    setSocials(eventSocials);
  }, [eventName, eventSocials]);

  const [fileUploaded, setFileUploaded] = useState(photo ? true : false);
  const [fileSizeError, setFileSizeError] = useState(false);

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      const fileSizeLimit = 5 * 1024 * 1024;
      const file = files[0];
      if (file.size <= fileSizeLimit) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const photo = e.target?.result as string;
          setFileUploaded(true);
          setFileSizeError(false);
          setPhoto(photo);
        };
        reader.readAsDataURL(file);
      } else {
        setFileSizeError(true);
        setFileUploaded(false);
      }
    }
  };

  const handleDeletePhoto = () => {
    setPhoto("");
    setFileUploaded(false);
  };

  return (
    <Box sx={styles.editEventChangeWrapper}>
      <Box sx={styles.editEventChangeFormContainer} component="form" noValidate>
        <Box sx={styles.editEventChangeContainer}>
          <TextField
            placeholder="Имя (фамилия, имя, отчество)"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
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
              value={year}
              onChange={(event) => setYear(event.target.value)}
              displayEmpty
            >
              <MenuItem value="">
                <Typography sx={styles.editEventPlaceholder}>
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
            value={socials}
            onChange={(event) => setSocials(event.target.value)}
            sx={styles.editEventChange}
          />
          <TextField
            placeholder="Телефон"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            sx={styles.editEventChange}
          />
          <FormGroup sx={styles.editEventCheckboxWrapper}>
            <FormControlLabel
              control={<Checkbox />}
              label="WhatsApp"
              checked={messengers.includes("WhatsApp")}
              onChange={() => {
                if (messengers.includes("WhatsApp")) {
                  setMessengers(
                    messengers.filter((messenger) => messenger !== "WhatsApp"),
                  );
                } else {
                  setMessengers([...messengers, "WhatsApp"]);
                }
              }}
              sx={styles.editEventCheckbox}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Viber"
              checked={messengers.includes("Viber")}
              onChange={() => {
                if (messengers.includes("Viber")) {
                  setMessengers(
                    messengers.filter((messenger) => messenger !== "Viber"),
                  );
                } else {
                  setMessengers([...messengers, "Viber"]);
                }
              }}
              sx={styles.editEventCheckbox}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Telegram"
              checked={messengers.includes("Telegram")}
              onChange={() => {
                if (messengers.includes("Telegram")) {
                  setMessengers(
                    messengers.filter((messenger) => messenger !== "Telegram"),
                  );
                } else {
                  setMessengers([...messengers, "Telegram"]);
                }
              }}
              sx={styles.editEventCheckbox}
            />
          </FormGroup>
        </Box>
        <Box sx={styles.editEventChangeContainer}>
          <TextField
            placeholder="Адрес"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            sx={styles.editEventChange}
          />

          <TextField
            placeholder="E-mail"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
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
            value={textarea}
            onChange={(event) => setTextarea(event.target.value)}
            sx={styles.editEventChange}
          />
          {fileUploaded && (
            <Box sx={styles.editEventPhotoWrapper}>
              <Avatar alt={name} src={photo} />
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
                  onChange={(e) => handleFileUpload(e.target.files)}
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
        <Button sx={styles.editEventSave} onClick={handleUpdateEvent}>
          Сохранить
        </Button>
        <Button sx={styles.editEventBack} onClick={goBack}>
          Вернуться назад
        </Button>
      </Box>
    </Box>
  );
};
