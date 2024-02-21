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
  selectedEvent,
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
        {photo ? (
          <Avatar alt={name} src={photo} />
        ) : (
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: selectedEvent ? "color.yellow" : "color.green",
            }}
          >
            <Typography sx={{ textTransform: "uppercase", color: "#fff" }}>
              {name.charAt(0)}
            </Typography>
          </Box>
        )}
        <Typography>{name}</Typography>
        {year ? (
          <Typography>
            Дата рождения: {day} {modifiedMonth} {year}
          </Typography>
        ) : (
          <Typography>
            Дата рождения: {day} {modifiedMonth}
          </Typography>
        )}
        {phone && (
          <Typography>
            {" "}
            Телефон:
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
        {address && <Typography>Адрес: {address}</Typography>}
        {socials && <Typography>Социальные сети: {socials}</Typography>}
        {email && <Typography>E-mail: {email}</Typography>}
        {textarea && (
          <Typography>Дополнительная информация: {textarea}</Typography>
        )}
        <Button onClick={handleEditEvent}>Редактировать</Button>
      </Box>
    </Modal>
  );
};
