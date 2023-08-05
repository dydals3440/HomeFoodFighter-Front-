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
  console.log(day);
  recipes.forEach((recipe) =>
    convertedData[recipe.meal_time].push(day.indexOf(recipe.bydate) + 1),
  );
  return convertedData;
};

const findRecipeById = (recipeId) => {
  return DETAIL_RECIPE_LIST.find(
    (recipe) => recipe.result[0][0].recipe_id === parseInt(recipeId, 10),
  );
};

export { convertMainCalendarData, findRecipeById };
