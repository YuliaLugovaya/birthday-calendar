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
  editEventSave: {
    width: "200px",
    p: "20px",
    mt: "30px",
    border: "1px solid",
    borderColor: "color.green",
    bgcolor: "color.greenLight",
    color: "text.primary",
    "&:hover": {
      bgcolor: "color.green",
      color: "text.secondary",
    },
  },
  editEventChoice: {
    width: "300px",
    heigth: "50px",
    border: "1px solid",
    borderColor: "color.blue",
    borderRadius: "4px",
    m: "25px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid",
      borderColor: "color.blue",
    },
    "&:hover": {
      border: "1px solid",
      borderColor: "color.blue",
    },
  },
  editEventChangeWrapper: {
    display: "flex",
    gap: "10px",
  },
  editEventChangeContainer: {
    display: "flex",
    flexDirection: "column",
  },
  editEventChange: {
    width: "400px",
    border: "1px solid",
    borderColor: "color.green",
    borderRadius: "4px",
    m: "5px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid",
      borderColor: "color.green",
    },
    "&:hover": {
      border: "1px solid",
      borderColor: "color.green",
    },
  },
  editEventCheckboxWrapper: {
    display: "flex",
    flexDirection: "row",
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
      bgcolor: "#94a97533",
      transition: "0.3s ease",
    },
  },
  editEventPhotoWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    m: "5px 0",
  },
  editEventPhotoAdd: {
    m: "15px 0",
    color: "color.green",
    "&:hover": {
      color: "color.blue",
      bgcolor: "transparent",
    },
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
    display: "flex",
    flexDirection: "column",
    p: "20px",
    mr: "20px",
    gap: "10px",
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
  editAddedPhoto: {
    width: 70,
    height: 70,
  },
};
