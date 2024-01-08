export const styles = {
  editEventContainer: {
    "& .MuiDrawer-paperAnchorTop": {
      p: "20px",
      width: "100vw",
      height: "100vh",
      alignItems: "start",
    },
  },
  editEventIconClose: {
    width: "30px",
  },
  editEventContant: {
    display: "flex",
    flexDirection: "column",
  },
  editEventTitle: {
    fontSize: "2rem",
  },
  editEventAdd: {
    width: "300px",
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
    width: "300px",
    border: "1px solid",
    borderColor: "color.other",
    borderRadius: "4px",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid",
      borderColor: "color.other",
    },
    "&:hover": {
      border: "1px solid",
      borderColor: "color.other",
    },
  },
};
