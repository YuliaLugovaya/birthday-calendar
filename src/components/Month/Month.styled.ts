export const styles = {
  monthContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    m: "0 auto",
  },
  monthTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  monthTitleElement: {
    fontSize: {
      xs: "1.5rem",
      md: "2rem",
    },
    color: "color.blueDark",
  },
  monthContent: {
    border: "1px solid",
    borderColor: "color.green",
  },
  monthWeek: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    justifyContent: "space-between",
    bgcolor: "color.green",
    border: "1px solid",
    borderColor: "color.green",
    color: "text.secondary",
  },
  monthDay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "150px",
    height: "35px",
    gap: "10px",
  },
  monthWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr",
  },
  monthTable: {
    border: "1px solid",
    borderColor: "color.green",
  },
  monthEmptyCell: {
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
    p: "5px",
    borderRadius: "0px",
    border: "1px solid",
    borderColor: "color.green",
    lineHeight: "1",
    color: "color.disabled",
  },
};
