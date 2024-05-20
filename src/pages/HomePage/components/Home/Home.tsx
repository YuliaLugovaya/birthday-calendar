import React, { FC, useRef, useState } from "react";
import { Box, Typography, Button, Link, Slide } from "@mui/material";
import { styles } from "./Home.styled";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import birthday from "assets/images/png/birthday-cake.png";

const data = [
  {
    titleLeft: "Заголовок 1",
    img: birthday,
  },
  {
    titleLeft: "Заголовок 2",
    img: birthday,
  },
  {
    titleLeft: "Заголовок 3",
    img: birthday,
  },
];

export const Home: FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIdx: number, newIdx: number) => setCurrentSlide(newIdx),
  };
  const navigate = useNavigate();
  const goCalendar = () => {
    navigate(`${routes.home.root}/${routes.home.calendar}`);
  };

  return (
    <Box>
      <Slider ref={sliderRef} {...settings}>
        {data.map((slide, index) => (
          <Box key={index}>
            <Box>
              <Typography variant="h4">{slide.titleLeft}</Typography>
              <img
                src={slide.img}
                alt={slide.titleLeft}
                style={{ width: 200, marginLeft: 16 }}
              />
            </Box>
          </Box>
        ))}
      </Slider>
      <Box>
        <Button onClick={goCalendar}>Перейти в календарь</Button>
      </Box>
    </Box>
  );
};
