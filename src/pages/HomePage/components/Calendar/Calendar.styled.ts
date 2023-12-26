export const styles = {
  calendarContainer: {
    maxWidth: "100%",
    "& .slick-slider": {
      "& .slick-arrow": {
        display: "none !important",
      },
      "& .slick-list": {
        width: {
          xs: "100vw",
          lg: "60vw",
        },
        overflow: "hidden",
        margin: "0 auto",
        "& .slick-track": {
          width: "10000px !important",
        },
        p: "30px 50px !important",
      },
      "& .slick-slide": {
        width: "250px",
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
    bgcolor: "color.yellow",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    minWidth: "0px",
  },
  calendarNext: {
    bgcolor: "color.yellow",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    minWidth: "0px",
  },
};
