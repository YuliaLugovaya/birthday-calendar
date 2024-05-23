export const styles = {
  calendarContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
    p: {
      xs: "0px",
      lg: "0 20px",
    },
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
    display: {
      xs: "flex",
      lg: "none",
    },
    justifyContent: "center",
    gap: "20px",
    m: "30px",
  },
  calendarPrev: {
    display: {
      xs: "none",
      lg: "flex",
    },
    bgcolor: "color.blueLight",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    minWidth: "0px",
  },
  calendarNext: {
    display: {
      xs: "none",
      lg: "flex",
    },
    bgcolor: "color.blueLight",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    minWidth: "0px",
  },
  calendarPrevMobile: {
    // display: {
    //   xs: "none",
    //   lg: "flex",
    // },
    bgcolor: "color.blueLight",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    minWidth: "0px",
  },
  calendarNextMobile: {
    // display: {
    //   xs: "none",
    //   lg: "flex",
    // },
    bgcolor: "color.blueLight",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    minWidth: "0px",
  },
};
