export const routes = {
  home: {
    root: "/event-calendar",
    date: {
      root: "date",
      day: ":day",
      addEvent: "add-event",
      editEvent: "edit-event",
    },
    allEvents: "all-events",
  },
};
