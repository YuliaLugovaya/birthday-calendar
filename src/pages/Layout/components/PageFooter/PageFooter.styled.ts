export const styles = {
  footerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    p: "15px 50px",
    bgcolor: "color.hover",
    color: "text.secondary",
    fontFamily: `"Open Sans", sans-serif`,
  },
  footerLink: {
    color: "text.secondary",
    textDecoration: "none",
    transition: "ease 0.3s",
    "&:hover": {
      color: "color.other",
      transition: "ease 0.3s",
    },
  },
};
