import React, { FC } from "react";
import {
  Typography,
  Box,
  Modal,
  IconButton,
  Avatar,
  Button,
} from "@mui/material";
import { ReactComponent as CloseIcon } from "assets/svg/icon_close.svg";
import { styles } from "./EventModal.styled";
import { IEventModalProps } from "./EventModalTypes";
import { routes } from "config/routes";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { EditEventState } from "store/events/eventsTypes";
import { clearSelectEvent, isEventAdded } from "store/events/eventsActions";

export const EventModal: FC<IEventModalProps> = ({
  openModal,
  modalClose,
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
  modifiedMonth,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const specificDay = useSelector(
  //   (rootReducer: { event: EditEventState }) => rootReducer.event.specificDay,
  // );
  const handleEditEvent = () => {
    dispatch(isEventAdded());
    modalClose();
    navigate(
      `${routes.home.root}/${routes.home.date.root}/${day}/${routes.home.date.editEvent}`,
    );
  };
  const handleClearSpecificEvent = () => {
    modalClose();
    dispatch(clearSelectEvent());
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
                {name.charAt(0)}
              </Typography>
            </Box>
          )}
          <Typography sx={styles.modalName}>{name}</Typography>
        </Box>
        <Box sx={styles.modalContentContainer}>
          {year ? (
            <Typography>
              <Typography sx={styles.modalAccentText}>
                Дата рождения:
              </Typography>{" "}
              {day} {modifiedMonth} {year}
            </Typography>
          ) : (
            <Typography>
              <Typography sx={styles.modalAccentText}>
                Дата рождения:
              </Typography>{" "}
              {day} {modifiedMonth}
            </Typography>
          )}
          {phone && (
            <Typography>
              {" "}
              <Typography sx={styles.modalAccentText}>Телефон: </Typography>
              {phone}{" "}
              {messengers && (
                <>
                  {messengers.length > 0 && (
                    <>
                      {" "}
                      (
                      {messengers
                        .map((messenger) => (
                          <span key={messenger}>{messenger}</span>
                        ))
                        .join(", ")}
                      )
                    </>
                  )}
                </>
              )}
            </Typography>
          )}
          {address && (
            <Typography>
              <Typography sx={styles.modalAccentText}>Адрес:</Typography>{" "}
              {address}
            </Typography>
          )}
          {socials && (
            <Typography>
              <Typography sx={styles.modalAccentText}>
                Социальные сети:
              </Typography>{" "}
              <a href={socials} target="_blank" rel="noopener noreferrer">
                {socials}
              </a>
            </Typography>
          )}
          {email && (
            <Typography>
              <Typography sx={styles.modalAccentText}>E-mail:</Typography>{" "}
              {email}
            </Typography>
          )}
          {textarea && (
            <Typography>
              <Typography sx={styles.modalAccentText}>
                Дополнительная информация:
              </Typography>{" "}
              {textarea}
            </Typography>
          )}
        </Box>

        <Button onClick={handleEditEvent} sx={styles.modalEditButton}>
          Редактировать
        </Button>
      </Box>
    </Modal>
  );
};
