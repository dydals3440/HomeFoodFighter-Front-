import {
  VEGETALBLE,
  CEREAL,
  MEATSEAFOODS,
  SEASONING,
  PROCEEDANDMILK,
  INGREDIENT_ID,
} from 'constants/ingredient';

const getIngredientKorean = (ingredient) => {
  switch (ingredient) {
    case 1:
      return Object.keys(VEGETALBLE);
    case 2:
      return Object.keys(CEREAL);
    case 3:
      return Object.keys(MEATSEAFOODS);
    case 4:
      return Object.keys(SEASONING);
    case 5:
      return Object.keys(PROCEEDANDMILK);
    default:
      return [];
  }
};

const getIngredientId = (ingredient) => {
  return Object.keys(INGREDIENT_ID).find(
    (id) => INGREDIENT_ID[id] === ingredient,
  );
};
export { getIngredientKorean, getIngredientId };
