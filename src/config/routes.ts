export const routes = {
  home: {
    root: "/event-calendar",
    date: {
      root: "date",
      day: ":day",
      addEvent: "addEvent",
      editEvent: "editEvent",
    },
    allEvents: "all-events",
  },
};
