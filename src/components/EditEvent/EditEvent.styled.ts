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
  editEventAdd: {
    width: "400px",
    p: "20px",
    border: "1px solid",
    borderColor: "color.other",
    bgcolor: "color.greenLight",
    color: "text.primary",
    "&:hover": {
      bgcolor: "color.other",
      color: "text.secondary",
    },
  },
  editEventChange: {
    width: "400px",
    border: "1px solid",
    borderColor: "color.other",
    borderRadius: "4px",
    m: "5px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid",
      borderColor: "color.other",
    },
    "&:hover": {
      border: "1px solid",
      borderColor: "color.other",
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
    justifyContent: "space-between",
    alignItems: "center",
    width: "400px",
  },
};
