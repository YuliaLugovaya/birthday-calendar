import React, { FC } from "react";
import { Box, Button, CardMedia } from "@mui/material";
import { styles } from "./Home.styled";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideFirst from "assets/images/slides/slide_1.jpg";
import slideSecond from "assets/images/slides/slide_2.jpg";
import slideThird from "assets/images/slides/slide_3.jpg";

type Slide = {
  titleAccent: string;
  titleText: string;
  img: string;
};

const data: Slide[] = [
  {
    titleAccent: "Не пропусти",
    titleText: "ни одного праздничного дня",
    img: slideFirst,
  },
  {
    titleAccent: "Записывай и отмечай",
    titleText: "праздники с лёгкостью",
    img: slideSecond,
  },
  {
    titleAccent: "всегда на виду",
    titleText: "Дни рождения",
    img: slideThird,
  },
];

const splitTitle = (slide: Slide) => {
  const isFirstLetterCapital = (str: string) => str[0] === str[0].toUpperCase();

  if (isFirstLetterCapital(slide.titleAccent)) {
    return (
      <>
        <Box key="accent" sx={styles.homeTitleAccent}>
          {slide.titleAccent}{" "}
        </Box>
        <Box key="text">{slide.titleText}</Box>
      </>
    );
  } else if (isFirstLetterCapital(slide.titleText)) {
    return (
      <>
        <Box key="text">{slide.titleText} </Box>
        <Box key="accent" sx={styles.homeTitleAccent}>
          {slide.titleAccent}
        </Box>
      </>
    );
  } else {
    return (
      <>
        <Box key="accent" sx={styles.homeTitleAccent}>
          {slide.titleAccent}{" "}
        </Box>
        <Box key="text">{slide.titleText}</Box>
      </>
    );
  }
};

export const Home: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const navigate = useNavigate();
  const goCalendar = () => {
    navigate(`${routes.home.root}/${routes.home.calendar}`);
  };

  return (
    <Box sx={styles.homeContainer}>
      <Slider {...settings}>
        {data.map((slide, index) => (
          <Box key={index}>
            <Box sx={styles.homeSlide}>
              <Box sx={styles.homeTitleWrapper}>
                <Box sx={styles.homeTitle}>{splitTitle(slide)}</Box>
              </Box>
              <Box sx={styles.homeImageWrapper}>
                <CardMedia
                  component="img"
                  image={slide.img}
                  alt="Birthday calendar"
                  sx={styles.homeImage}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
      <Button onClick={goCalendar} sx={styles.homeButton}>
        Перейти в календарь
      </Button>
    </Box>
  );
};
