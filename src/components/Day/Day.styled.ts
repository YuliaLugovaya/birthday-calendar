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
