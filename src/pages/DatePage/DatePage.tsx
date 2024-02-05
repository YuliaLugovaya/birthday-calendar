import React, { useEffect, useState } from "react";
import { EventsLayout } from "./components/EventsLayout/EventsLayout";

const DatePage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsDrawerOpen(true);
  }, []);

  return (
    <>
      <EventsLayout isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default DatePage;
