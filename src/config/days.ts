import { format, eachDayOfInterval } from "date-fns";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const allDays = eachDayOfInterval({
  start: new Date(currentYear, 0, 1),
  end: new Date(currentYear, 11, 31),
});

const days = allDays.reduce(
  (acc: { id: string; date: string }[], day, index) => {
    acc.push({
      id: (index + 1).toString(),
      date: format(day, "yyyy-MM-dd"),
    });
    return acc;
  },
  [],
);

export default days;
