export const styles = {
  dayContainer: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    maxWidth: "150px",
    minWidth: "10px",
    height: {
      xs: "50px",
      md: "70px",
    },
    gap: "10px",
    p: {
      xs: "3px",
      sm: "4px",
      md: "5px",
    },
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
  dayText: {
    fontSize: {
      xs: "0.7rem",
      sm: "0.8rem",
      md: "1rem",
    },
  },
  eventIcon: {
    width: {
      xs: "15px",
      md: "25px",
    },
  },
  eventIconsWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "end",
    justifyContent: "end",
    gap: "5px",
    width: "100%",
  },
  eventCount: {
    position: "absolute",
    top: 4,
    right: 4,
    fontSize: "0.8rem",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "2px 4px",
    borderRadius: 4,
  },
};
