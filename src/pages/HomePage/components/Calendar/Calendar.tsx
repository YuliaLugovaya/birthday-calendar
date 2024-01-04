import React, { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, useMediaQuery } from "@mui/material";
import { styles } from "./Calendar.styled";
import { Month } from "components/Month/Month";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format, startOfMonth } from "date-fns";
import prev from "assets/images/png/prev.png";
import next from "assets/images/png/next.png";
import months from "config/months";

export const Calendar: FC = () => {
  const monthItems = months;
  const currentMonth = startOfMonth(new Date());
  const sliderRef = useRef<Slider>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    touchThreshold: 500,
    initialSlide: monthItems.findIndex(
      (month) => month.month === format(currentMonth, "MM"),
    ),
    swipeToSlide: true,
    infinite: false,
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <Box sx={styles.calendarContainer}>
      <Button
        sx={{
          ...styles.calendarPrev,
          "&:before": {
            width: "20px",
            height: "20px",
            position: "absolute",
            content: '""',
            background: `url(${prev}) no-repeat`,
          },
          "&:hover": {
            bgcolor: isDesktop ? "#0097a7" : "#e0f7fa",
          },
          "&:disabled": {
            bgcolor: "#e0f7fa88",
            pointerEvents: "none",
          },
        }}
        onClick={prevSlide}
      ></Button>
      <Slider ref={sliderRef} {...settings}>
        {monthItems.map((month) => (
          <Month
            key={month.id}
            title={month.title}
            year={month.year}
            id={month.id}
          />
        ))}
      </Slider>
      <Button
        sx={{
          ...styles.calendarNext,
          "&:before": {
            width: "20px",
            height: "20px",
            position: "absolute",
            content: '""',
            background: `url(${next}) no-repeat`,
          },
          "&:hover": {
            bgcolor: isDesktop ? "#0097a7" : "#e0f7fa",
          },
          "&:disabled": {
            bgcolor: "#e0f7fa88",
            pointerEvents: "none",
          },
        }}
        onClick={nextSlide}
      ></Button>
    </Box>
  );
};
