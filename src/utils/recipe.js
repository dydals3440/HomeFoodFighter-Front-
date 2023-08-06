import { dateToString, getMonday, getTomorrow } from './date';

const convertMainCalendarData = (recipes) => {
  const d = getMonday(new Date());
  const convertedData = {
    1: [],
    2: [],
    3: [],
  };
  const day = Array(7)
    .fill()
    .map((_, idx) =>
      idx === 0 ? dateToString(d) : dateToString(getTomorrow(d)),
    );
  recipes.forEach((recipe) =>
    convertedData[recipe.meal_time].push(day.indexOf(recipe.bydate) + 1),
  );
  return convertedData;
};

const convertCalendarData = (date, recipe) => {};

export { convertMainCalendarData, convertCalendarData };
