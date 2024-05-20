interface BirthdaysData {
  [key: string]: {
    [key: number]: {
      sex: string;
      name: string;
    };
  };
}

const birthdays: BirthdaysData = {
  May: {
    19: {
      sex: "женский",
      name: "Наталья Орейро",
    },
    20: {
      sex: "мужской",
      name: "Бред Питт",
    },
  },
};

export default birthdays;
