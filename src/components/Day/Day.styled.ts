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
    borderColor: "color.green",
    "& p": {
      lineHeight: "1",
      color: "color.grey",
    },
    "&:hover": {
      bgcolor: "color.blueLight",
    },
  },
  eventIcon: {
    width: "25px",
  },
  eventIconsWrapper: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "end",
    justifyContent: "end",
    gap: "5px",
    width: "100%",
  },
};
