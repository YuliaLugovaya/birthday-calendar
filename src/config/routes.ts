export const routes = {
  home: {
    root: "/birthday-calendar",
    calendar: "months",
    date: {
      root: "date",
      day: ":day",
      addEvent: "add-event",
      editEvent: "edit-event",
    },
    allBirthdays: "all-birthdays",
  },
};
