const getMonday = (date) => {
  if (date.getDay() === 1) return date;
  if (date.getDay() === 0) {
    date.setDate(date.getDate() - 6);
  } else {
    date.setDate(date.getDate() - date.getDay() + 1);
  }
  return date;
};

const getTomorrow = (date) => {
  date.setDate(date.getDate() + 1);
  return date;
};

const dateToString = (date) => {
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`;
};

export { getMonday, getTomorrow, dateToString };
