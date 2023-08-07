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

const convertCalendarData = (recipes) => {
  const result = {};
  recipes.forEach((recipe) => {
    if (result[new Date(recipe.bydate)])
      result[new Date(recipe.bydate)][recipe.meal_time] = recipe;
    else {
      result[new Date(recipe.bydate)] = {};
      result[new Date(recipe.bydate)][recipe.meal_time] = recipe;
    }
  });
  return result;
};

export { convertMainCalendarData, convertCalendarData };
