export const styles = {
  monthContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    m: "0 auto",
  },
  monthTitle: {
    alignSelf: "center",
  },
  monthWeek: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gap: "10px",
    justifyContent: "space-between",
  },
  monthDay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "150px",
    height: "70px",
    gap: "10px",
  },
  monthWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
    "& div": {
      display: "flex",
      justifyContent: "center",
    },
    gap: "10px",
  },
};
