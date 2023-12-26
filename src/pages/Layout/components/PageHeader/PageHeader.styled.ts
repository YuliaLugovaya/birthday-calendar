export const styles = {
  headerWrapper: {
    // position: "fixed",
    // top: 0,
    // width: "100%",
    // zIndex: "1",
    p: {
      xs: "0 20px",
      md: "0 50px",
    },
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: "10px 0",
  },
  headerLogo: {
    fontSize: {
      xs: "1rem",
      md: "1.5rem",
    },
    color: "color.accent",
    transition: "ease 0.3s",
    "&:hover": {
      color: "color.hover",
      transition: "ease 0.3s",
    },
  },
  headerLinksContainer: {
    display: "flex",
    gap: "25px",
  },
  headerLinks: {
    fontSize: "1.1rem",
    color: "color.accent",
    transition: "ease 0.3s",
    "&:hover": {
      color: "color.hover",
      transition: "ease 0.3s",
    },
  },
  headerLinksBurgerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    p: "50px 0",
  },
  headerLinksBurger: {
    fontSize: "1.5rem",
    color: "text.secondary",
  },
  headerLogoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  headerIcon: {
    width: {
      xs: "50px",
      md: "70px",
    },
  },
  chevronLeft: {
    cursor: "pointer",
    m: "30px 0",
  },
  burgerMenu: {
    "& .MuiDrawer-paperAnchorRight": {
      p: "20px",
      bgcolor: "color.accent",
      width: "80vw",
    },
  },
  headerIconClose: {
    width: "30px",
  },
};
