import { getYear } from "date-fns";

const currentYear = getYear(new Date());

const years = Array.from(
  { length: currentYear - 1899 },
  (_, index) => currentYear - index,
).map((year) => ({
  value: year.toString(),
  label: year.toString(),
  disabled: false,
}));

// years.unshift({
//   value: "Выберите год",
//   label: "Выберите год",
//   disabled: true,
// });

export default years;
