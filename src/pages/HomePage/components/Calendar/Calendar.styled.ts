export const styles = {
  calendarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
    p: "0 20px",
    "& .slick-slider": {
      "& .slick-arrow": {
        display: "none !important",
      },
      "& .slick-list": {
        width: {
          xs: "100vw",
          lg: "70vw",
        },
        overflow: "hidden",
        margin: "0 auto",
        p: "0px",
      },
      "& .slick-slide": {
        width: "100%",
        justifyContent: "center",
      },
    },
  },
  calendarButtons: {
    display: "flex",
    justifyContent: {
      xs: "center",
      lg: "end",
    },
    gap: "10px",
    m: {
      xs: "10px 20px 20% 20px",
      lg: "20px",
    },
  },
  calendarPrev: {
    bgcolor: "color.background",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    minWidth: "0px",
  },
  calendarNext: {
    bgcolor: "color.background",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    minWidth: "0px",
  },
};
