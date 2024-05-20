import React, { FC } from "react";
import {
  Typography,
  Box,
  Modal,
  IconButton,
  Avatar,
  Button,
  Link,
} from "@mui/material";
import { ReactComponent as CloseIcon } from "assets/svg/icon_close.svg";
import { styles } from "./EventModal.styled";
import { IEventModalProps } from "./EventModalTypes";
import { routes } from "config/routes";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearSelectEvent,
  deleteEvent,
  isEventAdded,
} from "store/events/eventsActions";
import months from "config/months";

export const EventModal: FC<IEventModalProps> = ({
  openModal,
  modalClose,
  id,
  name,
  year,
  phone,
  messengers,
  address,
  socials,
  email,
  textarea,
  photo,
  day,
  month,
  modifiedMonth,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEditEvent = () => {
    const numericMonth =
      months.find((item) => item.title === month)?.month || "";
    dispatch(isEventAdded());
    modalClose();
    navigate(
      `${routes.home.root}/${routes.home.date.root}/${day}-${numericMonth}/${routes.home.date.editEvent}`,
    );
  };
  const handleClearSpecificEvent = () => {
    modalClose();
    dispatch(clearSelectEvent());
  };
  const handleDeleteEvent = () => {
    const keyToDelete = id;
    dispatch(deleteEvent(keyToDelete));
    modalClose();
  };
  return (
    <Modal
      open={openModal || false}
      onClose={handleClearSpecificEvent}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalContainer}>
        <IconButton
          aria-label="Close"
          sx={styles.modalIconClose}
          onClick={handleClearSpecificEvent}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={styles.modalPhotoNameContainer}>
          {photo ? (
            <Avatar alt={name} src={photo} sx={styles.modalAddedPhoto} />
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
                mb: "10px",
              }}
            >
              <Typography sx={{ textTransform: "uppercase", color: "#fff" }}>
                {name
                  .trim()
                  .split(" ")
                  .map((word) => word.charAt(0))
                  .join("")}
              </Typography>
            </Box>
          )}
          <Typography sx={styles.modalName}>{name}</Typography>
        </Box>
        <Box sx={styles.modalContentContainer}>
          {year ? (
            <Box>
              <Typography sx={styles.modalAccentText}>
                Дата рождения:
              </Typography>{" "}
              {day} {modifiedMonth} {year}
            </Box>
          ) : (
            <Box>
              <Typography sx={styles.modalAccentText}>
                Дата рождения:
              </Typography>{" "}
              {day} {modifiedMonth}
            </Box>
          )}
          {phone && (
            <Box>
              <Typography sx={styles.modalAccentText}>Телефон: </Typography>
              {phone}
              {messengers && messengers.length > 0 && (
                <> ({messengers.map((messenger) => messenger).join(", ")})</>
              )}
            </Box>
          )}
          {address && (
            <Box>
              <Typography sx={styles.modalAccentText}>Адрес:</Typography>{" "}
              {address}
            </Box>
          )}
          {socials && (
            <Box>
              <Typography sx={styles.modalAccentText}>
                Социальные сети:
              </Typography>{" "}
              <Link
                sx={styles.modalLink}
                href={socials}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socials}
              </Link>
            </Box>
          )}
          {email && (
            <Box>
              <Typography sx={styles.modalAccentText}>E-mail:</Typography>{" "}
              {email}
            </Box>
          )}
          {textarea && (
            <Box>
              <Typography sx={styles.modalAccentText}>
                Дополнительная информация:
              </Typography>{" "}
              {textarea}
            </Box>
          )}
        </Box>
        <Box sx={styles.modalEditButtons}>
          <Button onClick={handleEditEvent} sx={styles.modalEditButton}>
            Редактировать
          </Button>
          <Button onClick={handleDeleteEvent} sx={styles.modalEditButtonDelete}>
            Удалить
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
