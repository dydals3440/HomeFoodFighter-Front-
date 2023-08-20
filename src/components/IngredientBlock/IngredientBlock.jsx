import * as S from './IngredientBlock.styles';

import useFindValidIcon from 'hooks/useFindValidIcon';

const IngredientBlock = (props) => {
  const { mainTitle, ingredient } = props;
  const findValidIcon = useFindValidIcon();

  return (
    <S.Container>
      <p>{mainTitle}</p>
      <S.IngredientBox>
        {ingredient.map((ingre, idx) => {
          const selectedIcon = findValidIcon(ingre.ingre_id);
          return (
            <S.Ingredient key={idx}>
              {selectedIcon}
              <h5>{ingre.ingre_name}</h5>
              <h5>{ingre.amount}</h5>
            </S.Ingredient>
          );
        })}
      </S.IngredientBox>
    </S.Container>
  );
};

export default IngredientBlock;
