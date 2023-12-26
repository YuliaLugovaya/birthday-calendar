export const styles = {
  monthContainer: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
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
  },
  monthWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
    "& div": {
      display: "flex",
      justifyContent: "center",
    },
  },
};
