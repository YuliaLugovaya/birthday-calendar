import React, { FC, useEffect, useState } from "react";
import {
  Box,
  CardMedia,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styles } from "./PageHeader.styled";
import { Link, useLocation } from "react-router-dom";
import { routes } from "config/routes";
import burger from "assets/images/png/burger-menu.png";
import close from "assets/images/png/close.png";
import logo from "assets/images/png/logo.png";

export const PageHeader: FC = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(routes.home.root);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setActiveLink(routes.home.root);
  }, []);

  const isActiveLink = (path: string) => {
    return activeLink.endsWith(path) ? "color.blueDark" : "color.blue";
  };

  return (
    <Box sx={styles.headerWrapper} component="header">
      <Box sx={styles.headerContainer}>
        <Link to={routes.home.root}>
          <Box sx={styles.headerLogoContainer}>
            <CardMedia
              sx={styles.headerLogoImage}
              component="img"
              image={logo}
              alt="Logo"
            />
            <Typography sx={styles.headerLogo}>Birthday calendar</Typography>
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
                <Link onClick={toggleDrawer} to={routes.home.root}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.root),
                    }}
                  >
                    Главная
                  </Typography>
                </Link>
                <Link onClick={toggleDrawer} to={routes.home.calendar}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.calendar),
                    }}
                  >
                    Календарь
                  </Typography>
                </Link>
                <Link onClick={toggleDrawer} to={routes.home.allBirthdays}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.allBirthdays),
                    }}
                  >
                    Все дни рождения
                  </Typography>
                </Link>
              </Box>
            </Drawer>
          </Box>
        ) : (
          <Box sx={styles.headerLinksContainer}>
            <Link to={routes.home.root}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.root),
                }}
              >
                Главная
              </Typography>
            </Link>
            <Link to={routes.home.calendar}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.calendar),
                }}
              >
                Календарь
              </Typography>
            </Link>
            <Link to={routes.home.allBirthdays}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.allBirthdays),
                }}
              >
                Все дни рождения
              </Typography>
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
