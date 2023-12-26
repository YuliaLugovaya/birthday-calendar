import { format, endOfMonth } from "date-fns";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const months = [
  {
    id: "1",
    title: "Январь",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(new Date(currentYear, 0), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 0)).getDate(),
  },
  {
    id: "2",
    title: "Февраль",
    year: format(new Date(currentYear, 1, 1), "yyyy"),
    month: format(new Date(currentYear, 1), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 1)).getDate(),
  },
  {
    id: "3",
    title: "Март",
    year: format(new Date(currentYear, 2, 1), "yyyy"),
    month: format(new Date(currentYear, 2), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 2)).getDate(),
  },
  {
    id: "4",
    title: "Апрель",
    year: format(new Date(currentYear, 3, 1), "yyyy"),
    month: format(new Date(currentYear, 3), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 3)).getDate(),
  },
  {
    id: "5",
    title: "Май",
    year: format(new Date(currentYear, 4, 1), "yyyy"),
    month: format(new Date(currentYear, 4), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 4)).getDate(),
  },
  {
    id: "6",
    title: "Июнь",
    year: format(new Date(currentYear, 5, 1), "yyyy"),
    month: format(new Date(currentYear, 5), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 5)).getDate(),
  },
  {
    id: "7",
    title: "Июль",
    year: format(new Date(currentYear, 6, 1), "yyyy"),
    month: format(new Date(currentYear, 6), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 6)).getDate(),
  },
  {
    id: "8",
    title: "Август",
    year: format(new Date(currentYear, 7, 1), "yyyy"),
    month: format(new Date(currentYear, 7), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 7)).getDate(),
  },
  {
    id: "9",
    title: "Сентябрь",
    year: format(new Date(currentYear, 8, 1), "yyyy"),
    month: format(new Date(currentYear, 8), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 8)).getDate(),
  },
  {
    id: "10",
    title: "Октябрь",
    year: format(new Date(currentYear, 9, 1), "yyyy"),
    month: format(new Date(currentYear, 9), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 9)).getDate(),
  },
  {
    id: "11",
    title: "Ноябрь",
    year: format(new Date(currentYear, 10, 1), "yyyy"),
    month: format(new Date(currentYear, 10), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 10)).getDate(),
  },
  {
    id: "12",
    title: "Декабрь",
    year: format(new Date(currentYear, 11, 1), "yyyy"),
    month: format(new Date(currentYear, 11), "MM"),
    daysCount: endOfMonth(new Date(currentYear, 11)).getDate(),
  },
];

export default months;

// import { format, endOfMonth } from "date-fns";

// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();

// const months = Array.from({ length: 12 }, (_, index) => {
//   const monthIndex = index;
//   const startDate = new Date(currentYear, monthIndex, 1);
//   const endDate = new Date(currentYear, monthIndex, endOfMonth(startDate).getDate());

//   return {
//     id: (index + 1).toString(),
//     title: format(startDate, "MMMM"),
//     year: format(startDate, "yyyy"),
//     month: format(endDate, "yyyy-MM"),
//     daysCount: endOfMonth(startDate).getDate(),
//   };
// });

// export default months;
