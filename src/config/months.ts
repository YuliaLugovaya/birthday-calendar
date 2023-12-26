import { format, endOfMonth } from "date-fns";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const months = [
  {
    id: "1",
    title: "Январь",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 0)), "yyyy"),
  },
  {
    id: "2",
    title: "Февраль",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 1)), "yyyy"),
  },
  {
    id: "3",
    title: "Март",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 2)), "yyyy"),
  },
  {
    id: "4",
    title: "Апрель",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 3)), "yyyy"),
  },
  {
    id: "5",
    title: "Май",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 4)), "yyyy"),
  },
  {
    id: "6",
    title: "Июнь",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 5)), "yyyy"),
  },
  {
    id: "7",
    title: "Июль",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 6)), "yyyy"),
  },
  {
    id: "8",
    title: "Август",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 7)), "yyyy"),
  },
  {
    id: "9",
    title: "Сентябрь",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 8)), "yyyy"),
  },
  {
    id: "10",
    title: "Октябрь",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 9)), "yyyy"),
  },
  {
    id: "11",
    title: "Ноябрь",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 10)), "yyyy"),
  },
  {
    id: "12",
    title: "Декабрь",
    year: format(new Date(currentYear, 0, 1), "yyyy"),
    month: format(endOfMonth(new Date(currentYear, 11)), "yyyy"),
  },
];

export default months;
