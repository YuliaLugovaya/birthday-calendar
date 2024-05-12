export const styles = {
  birthdaysContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "100%",
    m: "35px 20px",
    border: "1px solid",
    borderColor: "color.disabled",
  },
  birthdaysItems: {
    width: {
      xl: "25%",
      lg: "33.33%",
      md: "50%",
      xs: "100%",
    },
    border: "1px solid",
    borderColor: "color.disabled",
  },
  birthdaysMonth: {
    fontSize: "1.5rem",
    color: "color.green",
    p: "15px",
  },
  birthdaysItem: {
    p: "5px 15px",
  },
  birthdaysPerson: {
    cursor: "pointer",
  },
  birthdaysDay: {
    display: "inline",
    mr: "5px",
    fontWeight: "700",
    fontSize: "1.1rem",
    color: "color.coral",
  },
  birthdaysName: {
    display: "inline",
    "&:hover": {
      color: "color.blue",
    },
  },
};
