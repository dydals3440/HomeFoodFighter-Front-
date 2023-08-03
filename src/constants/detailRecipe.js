const DETAIL_RECIPE_LIST = {
  isSuccess: true,
  code: 1000,
  message: '성공',
  result: [
    [
      {
        recipe_id: 3,
        userid: 2,
        recipe_name: '스파게티',
        cook_time: 30,
        difficulty: 2,
        img_url: 'https://example.com/spaghetti.jpg',
      },
    ],
    [
      {
        cook_order: 1,
        description: '감자와 야채들을 씻어줍니다',
        order_img_url: null,
      },
      {
        cook_order: 2,
        description: '재료를 손톱만큼 다져줍니다',
        order_img_url: 'https:202020',
      },
    ],
    [
      {
        recipe_id: 3,
        DetailIngre_type: 1,
        ingre_name: '감자',
      },
      {
        recipe_id: 3,
        DetailIngre_type: 2,
        ingre_name: '쌀',
      },
      {
        recipe_id: 3,
        DetailIngre_type: 1,
        ingre_name: '간장',
      },
    ],
  ],
};

export { DETAIL_RECIPE_LIST };
