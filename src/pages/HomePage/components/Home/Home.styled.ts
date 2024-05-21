export const styles = {
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    p: "50px",
    "& .slick-slider": {
      "& .slick-arrow": {
        display: "none !important",
      },
      "& .slick-next": {
        right: "0px",
      },
      "& .slick-prev": {
        left: "0px",
      },
      "& .slick-dots": {
        bottom: "-50px",
      },
      "& .slick-dots li.slick-active button:before": {
        color: "color.green",
      },
      "& .slick-dots li button:before": {
        color: "color.yellow",
      },
    },
  },
  homeSlide: {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    justifyContent: "center",
    width: "100%",
    p: "10px 0",
  },
  homeButton: {
    alignSelf: "center",
    width: "300px",
    p: "20px",
    mt: "70px",
    border: "1px solid",
    borderColor: "color.green",
    bgcolor: "color.greenLight",
    color: "text.primary",
    "&:hover": {
      bgcolor: "color.green",
      color: "text.secondary",
    },
  },
  homeImageWrapper: {
    width: {
      xs: "100%",
      lg: "50%",
      xl: "45%",
    },
    p: {
      xs: "0 10px",
      lg: "0px",
    },
  },
  homeImage: {
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px rgba(37, 37, 37, 0.3)",
  },
  homeTitleWrapper: {
    width: {
      xs: "100%",
      lg: "40%",
      xl: "45%",
    },
  },
  homeTitle: {
    mb: {
      xs: "30px",
      lg: "0px",
    },
    textAlign: "center",
    width: {
      xs: "100%",
      lg: "70%",
    },
    fontSize: {
      xs: "1rem",
      md: "1.5rem",
      lg: "2.1rem",
      xl: "3rem",
    },
    color: "text.primary",
  },
  homeTitleAccent: {
    display: "inline",
    color: "color.green",
  },
};
