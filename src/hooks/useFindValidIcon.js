import { INGREDIENT_ICON, INGREDIENT_ID } from 'constants/ingredient';

const useFindValidIcon = () => {
  const findValidIcon = (ingreId) => {
    for (let i = 0; i < INGREDIENT_ICON.length; i++) {
      if (INGREDIENT_ICON[i][INGREDIENT_ID[ingreId]]) {
        return INGREDIENT_ICON[i][INGREDIENT_ID[ingreId]];
      }
    }
    return null;
  };

  return findValidIcon;
};

export default useFindValidIcon;
