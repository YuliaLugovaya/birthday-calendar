export const styles = {
  editEventContainer: {
    "& .MuiDrawer-paperAnchorTop": {
      width: "100vw",
      height: "100vh",
      alignItems: "start",
    },
  },
  editEventHeader: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    p: "15px",
    mb: "15px",
    bgcolor: "color.greenLight",
  },
  editEventIconClose: {
    width: "30px",
    cursor: "pointer",
  },
  editEventWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  editEventContant: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  editEventTitle: {
    fontSize: "2rem",
  },
  editEventButtons: {
    width: {
      lg: "auto",
      xs: "100%",
    },
    display: "flex",
    flexDirection: {
      lg: "row",
      xs: "column",
    },
    gap: "10px",
    m: "30px 0",
  },
  editEventSave: {
    width: {
      lg: "200px",
      xs: "100%",
    },
    p: "20px",
    border: "1px solid",
    borderColor: "color.green",
    bgcolor: "color.greenLight",
    color: "text.primary",
    "&:hover": {
      bgcolor: "color.green",
      color: "text.secondary",
    },
  },
  editEventBack: {
    width: {
      lg: "200px",
      xs: "100%",
    },
    p: "20px",
    border: "1px solid",
    borderColor: "color.yellow",
    bgcolor: "color.yellowLight",
    color: "text.primary",
    "&:hover": {
      bgcolor: "color.yellow",
      color: "text.secondary",
    },
  },
  editEventChangeWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    width: {
      xl: "60vw",
      md: "65vw",
      xs: "90vw",
    },
  },
  editEventChangeFormContainer: {
    display: "flex",
    flexDirection: {
      lg: "row",
      xs: "column",
    },
    width: "100%",
    gap: "10px",
  },
  editEventChangeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: {
      lg: "start",
      xs: "center",
    },
    width: "100%",
  },
  editEventChange: {
    width: "100%",
    border: "2px solid",
    borderColor: "color.green",
    borderRadius: "4px",
    m: "5px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderWidth: "0px",
    },
    // "&:hover": {
    //   border: "2px solid",
    //   borderColor: "color.greenLight",
    // },
    // "&:focus": {
    //   border: "2px solid",
    //   borderColor: "color.greenLight",
    // },
    "& fieldset": {
      borderWidth: "0px",
    },
  },
  editEventCheckboxWrapper: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "start",
  },
  editEventCheckbox: {
    fontSize: {
      xs: "1rem",
      md: "1.2rem",
    },
    "& span:nth-of-type(1)": {
      color: "color.greenLight",
    },
    "& .MuiCheckbox-root": {
      transition: "0.3s ease",
    },
    "& .MuiCheckbox-root:hover": {
      bgcolor: "color.yellowLight",
      transition: "0.3s ease",
    },
  },
  editEventPhotoWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    m: "5px 0",
    alignSelf: "center",
  },
  editEventPhotoAdd: {
    m: "15px 0",
    color: "color.green",
    "&:hover": {
      color: "color.blue",
      bgcolor: "transparent",
    },
    alignSelf: "center",
  },
  editEventPhoto: {
    width: 70,
    height: 70,
  },
  editAllEvents: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "start",
  },
  editAddedEvents: {
    width: "300px",
    height: "200px",
    p: "20px",
    mr: "20px",
  },
  editEventAdd: {
    width: "300px",
    height: "200px",
    p: "20px",
    border: "1px solid",
    borderColor: "color.green",
    bgcolor: "color.greenLight",
    color: "text.primary",
    "&:hover": {
      bgcolor: "color.green",
      color: "text.secondary",
    },
  },
  editEventPlaceholder: {
    color: "text.disabled",
  },
};
