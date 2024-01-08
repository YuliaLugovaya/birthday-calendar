import React, { FC, useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Drawer,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./EditEvent.styled";
import { IEditEventProps } from "./EditEventTypes";
import close from "assets/images/png/close.png";
import events from "./events";

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

  const [isEventAdded, setIsEventAdded] = useState(false);

  const handleAddEvent = () => {
    setIsEventAdded(true);
  };

  return (
    <Drawer
      anchor="top"
      open={isDrawerOpen}
      onClose={toggleDrawer}
      sx={styles.editEventContainer}
    >
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
      {isEventAdded ? (
        <TextField
          select
          sx={styles.editEventChange}
          defaultValue="Выберите событие"
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
      ) : (
        <>
          <Button onClick={handleAddEvent} sx={styles.editEventAdd}>
            Добавить событие
          </Button>
        </>
      )}
    </Drawer>
  );
};
