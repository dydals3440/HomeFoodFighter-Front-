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

const getIngredientByType = (ingredients, type) => {
  const result = ingredients
    .filter((ingre) => ingre.ingre_type === type)
    .map((ingre) => INGREDIENT_ID[ingre.ingre_id]);
  return result;
};

const getIngredientId = (ingredient) => {
  return Object.keys(INGREDIENT_ID).find(
    (id) => INGREDIENT_ID[id] === ingredient,
  );
};

const convertIngredient = (data) => {
  const convertedData = {
    isEmpty: true,
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  };
  if (data.length > 0) convertedData.isEmpty = false;
  data.forEach((ingr) => {
    convertedData[ingr.ingre_type].push(ingr);
  });
  return convertedData;
};
export {
  getIngredientKorean,
  getIngredientByType,
  getIngredientId,
  convertIngredient,
};
