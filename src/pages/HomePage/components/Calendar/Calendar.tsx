import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, useMediaQuery } from "@mui/material";
import { styles } from "./Calendar.styled";
import { Month } from "components/Month/Month";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format } from "date-fns";
import prev from "assets/images/png/prev.png";
import next from "assets/images/png/next.png";
import months from "config/months";

export const Calendar: FC = () => {
  const monthItems = months;
  // const currentDate = format(new Date(), "yyyy-MM-dd");
  // const currentDay = days.find((item) => item.date === currentDate);
  // const [currentSlide, setCurrentSlide] = useState(
  //   currentDay ? days.indexOf(currentDay) : 0,
  // );
  // const sliderRef = useRef<Slider>(null);
  // const isDesktop = useMediaQuery("(min-width: 1024px)");

  // useEffect(() => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickGoTo(currentSlide);
  //   }
  // }, [currentSlide]);

  // const settings = {
  //   variableWidth: true,
  //   slidesToShow: currentSlide <= 27 ? 3 : 1,
  //   slidesToScroll: 1,
  //   touchThreshold: 500,
  //   centerMode: true,
  //   initialSlide: currentSlide,
  //   afterChange: (slideIndex: number) => setCurrentSlide(slideIndex),
  //   swipeToSlide: true,
  //   infinite: false,
  // };

  // const nextSlide = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickNext();
  //   }
  // };

  // const prevSlide = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPrev();
  //   }
  // };

  return (
    <Box sx={styles.calendarContainer}>
      {monthItems.map((month) => (
        <Month key={month.id} title={month.title} year={month.year} />
      ))}
    </Box>
  );
};
