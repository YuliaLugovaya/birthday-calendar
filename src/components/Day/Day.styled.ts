export const styles = {
  dayContainer: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    maxWidth: "150px",
    height: "70px",
    gap: "10px",
    p: "5px",
    borderRadius: "0px",
    border: "1px solid",
    borderColor: "color.other",
    "& p": {
      lineHeight: "1",
      color: "color.grey",
    },
    "&:hover": {
      bgcolor: "color.background",
    },
  },
};
