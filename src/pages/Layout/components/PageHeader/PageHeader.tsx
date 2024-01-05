import React, { FC, useState } from "react";
import {
  Box,
  CardMedia,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styles } from "./PageHeader.styled";
import { Link } from "react-router-dom";
import { routes } from "config/routes";
import burger from "assets/images/png/burger-menu.png";
import close from "assets/images/png/close.png";

export const PageHeader: FC = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <Box sx={styles.headerWrapper} component="header">
      <Box sx={styles.headerContainer}>
        <Link to={routes.home.root}>
          <Box sx={styles.headerLogoContainer}>
            <Typography sx={styles.headerLogo}>Календарь событий</Typography>
          </Box>
        </Link>
        {isMobile ? (
          <Box>
            <CardMedia
              sx={styles.headerIcon}
              component="img"
              image={burger}
              alt="Burger-menu"
              onClick={toggleDrawer}
            />
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              sx={styles.burgerMenu}
            >
              <CardMedia
                sx={styles.headerIconClose}
                component="img"
                image={close}
                alt="Close"
                onClick={toggleDrawer}
              />
              <Box sx={styles.headerLinksBurgerContainer}>
                <Link onClick={toggleDrawer} to={routes.home.allEvents}>
                  <Typography sx={styles.headerLinksBurger}>
                    Все события
                  </Typography>
                </Link>
              </Box>
            </Drawer>
          </Box>
        ) : (
          <Box sx={styles.headerLinksContainer}>
            <Link to={routes.home.allEvents}>
              <Typography sx={styles.headerLinks}>Все события</Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
