import { baseURL } from 'apis/api';
import { API_PATH } from 'constants/path';
import { MY_RECIPE, MY_REVIEW, RECIPE_LIST } from 'constants/recipe';
import { rest } from 'msw';
import { dateToString, getTomorrow } from 'utils/date';

const recipeHandler = [
  rest.get(`${baseURL}${API_PATH.POPULAR_RECIPE}`, (req, res, ctx) => {
    const recipe = [...RECIPE_LIST];
    return res(ctx.status(200), ctx.json({ result: recipe }));
  }),
  rest.get(`${baseURL}${API_PATH.FAVORITE_RECIPE}`, (req, res, ctx) => {
    const recipe = [...RECIPE_LIST];
    return res(ctx.status(200), ctx.json({ result: recipe }));
  }),

  rest.get(`${baseURL}${API_PATH.ALL_RECIPE}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 1000,
        message: '성공',
        result: [
          {
            name: '박민희',
            recipe_name: '서울식 불고기',
            summary: '자작자작한 국물이 매력적인 불고기!',
            img_url:
              'https://m.cj.co.kr/images/theKitchen/PHON/0000001560/0000005597/0000001560.jpg',
            type_class: '한식',
            recipe_id: 1,
            review_count: 0,
            star: '4.3',
          },
          {
            name: '박민희',
            recipe_name: '서울식 불고기',
            summary: '자작자작한 국물이 매력적인 불고기!',
            img_url:
              'https://m.cj.co.kr/images/theKitchen/PHON/0000001560/0000005597/0000001560.jpg',
            type_class: '중식',
            recipe_id: 2,
            review_count: 0,
            star: '4.3',
          },
          {
            name: '박민희',
            recipe_name: '서울식 불고기',
            summary: '자작자작한 국물이 매력적인 불고기!',
            img_url:
              'https://m.cj.co.kr/images/theKitchen/PHON/0000001560/0000005597/0000001560.jpg',
            type_class: '양식',
            recipe_id: 3,
            review_count: 0,
            star: '4.3',
          },
        ],
      }),
    );
  }),

  rest.get(
    `${baseURL}${API_PATH.DETAIL_RECIPE}/:recipe_id`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
          result: [
            [
              {
                recipe_id: 241,
                userid: 10,
                summary: '한국의 대표분식 떡볶이! 남녀노소 좋아해요~',
                user_img_url: null,
                nickname: 'qazd',
                recipe_name: '떡볶이',
                cook_time: 30,
                difficulty: '보통',
                img_url:
                  'http://file.okdab.com/UserFiles/searching/recipe/061400.jpg',
                quantity: '4인분',
              },
            ],
            [
              {
                cook_order: 1,
                description: '가래떡은 단단할 때 어슷썰어 준비한다.',
                order_img_url:
                  'http://file.okdab.com/UserFiles/searching/recipe/061400_p01.jpg',
              },
              {
                cook_order: 2,
                description:
                  '소시지는 가로, 세로  칼집을 넣어서 준비하고 양파, 피망은 넓적하게 썰고 대파는 어슷썬다.',
                order_img_url:
                  'http://file.okdab.com/UserFiles/searching/recipe/061400_p02.jpg',
              },
              {
                cook_order: 3,
                description:
                  '물이 끓으면 떡을 넣고 고추장과 양념 재료를 넣어 자작하게 조린다.',
                order_img_url: null,
              },
              {
                cook_order: 4,
                description:
                  '③에 ②의 준비한 야채를 넣고 숨이 죽을 정도로만 조려 상에 낸다.',
                order_img_url: null,
              },
            ],
            [
              {
                ingre_id: 1,
                recipe_id: 241,
                DetailIngre_type: 1,
                ingre_name: '가래떡',
                ingre_english: 'Rice cake',
                amount: '1줄',
              },
              {
                ingre_id: 3,
                recipe_id: 241,
                DetailIngre_type: 2,
                ingre_name: '양파',
                ingre_english: 'onion',
                amount: '1개',
              },
              {
                ingre_id: 3,
                recipe_id: 240,
                DetailIngre_type: 2,
                ingre_name: '대파',
                ingre_english: 'Scallion',
                amount: '1뿌리',
              },
              {
                ingre_id: 4,
                recipe_id: 240,
                DetailIngre_type: 2,
                ingre_name: '감자',
                ingre_english: 'potato',
                amount: '1개',
              },
              {
                ingre_id: 5,
                recipe_id: 241,
                DetailIngre_type: 2,
                ingre_name: '비엔나소시지',
                ingre_english: 'Vienna sausage',
                amount: '10개',
              },
              {
                ingre_id: 6,
                recipe_id: 241,
                DetailIngre_type: 3,
                ingre_name: '고추장',
                ingre_english: 'gochujang',
                amount: '3큰술',
              },
              {
                ingre_id: 7,
                recipe_id: 241,
                DetailIngre_type: 3,
                ingre_name: '간장',
                ingre_english: 'Soy Sauce',
                amount: '1큰술',
              },
              {
                ingre_id: 8,
                recipe_id: 241,
                DetailIngre_type: 2,
                ingre_name: '물',
                ingre_english: 'Water',
                amount: '1과1/2컵',
              },
              {
                ingre_id: 9,
                recipe_id: 241,
                DetailIngre_type: 3,
                ingre_name: '설탕',
                ingre_english: 'Sugar',
                amount: '2큰술',
              },
              {
                ingre_id: 10,
                recipe_id: 241,
                DetailIngre_type: 3,
                ingre_name: '물엿',
                ingre_english: 'Corn syrupp',
                amount: '1큰술',
              },
            ],
          ],
        }),
      );
    },
  ),
  rest.get(`${baseURL}${API_PATH.WEEK_CALENDAR}/:date`, (req, res, ctx) => {
    const { date } = req.params;
    const d = new Date(date);
    const day = Array(7)
      .fill()
      .map((_, idx) => (idx === 0 ? date : dateToString(getTomorrow(d))));
    const data = {
      isSuccess: true,
      code: 1000,
      message: '성공',
      result: [
        {
          userid: 5,
          recipe_id: null,
          bydate: day[0],
          meal_time: 1,
          name: '가지 볶음',
        },
        {
          userid: 5,
          recipe_id: 2,
          bydate: day[0],
          meal_time: 3,
          name: '가지 볶음',
        },
        {
          userid: 5,
          recipe_id: 23,
          bydate: day[1],
          meal_time: 2,
          name: '가지 볶음',
        },
        {
          userid: 5,
          recipe_id: 4,
          bydate: day[2],
          meal_time: 1,
          name: '가지 볶음',
        },
        {
          userid: 5,
          recipe_id: 5,
          bydate: day[5],
          meal_time: 1,
          name: '가지 볶음',
        },
        {
          userid: 5,
          recipe_id: 6,
          bydate: day[5],
          meal_time: 2,
          name: '가지 볶음',
        },
      ],
    };
    return res(ctx.status(200), ctx.json({ ...data }));
  }),
  rest.get(`${baseURL}${API_PATH.SEARCH_RECIPE}`, (req, res, ctx) => {
    const recipe_name = req.url.searchParams.get('recipe_name');
    return res(
      ctx.status(200),
      ctx.json({
        result: [
          {
            recipe_name: `${recipe_name} 볶음`,
            recipe_id: 1,
          },
          {
            recipe_name: `${recipe_name} 찌개`,
            recipe_id: 2,
          },
          {
            recipe_name: `${recipe_name} 지짐`,
            recipe_id: 3,
          },
          {
            recipe_name: `${recipe_name} 찜`,
            recipe_id: 4,
          },
          {
            recipe_name: `${recipe_name} 밥`,
            recipe_id: 5,
          },
          {
            recipe_name: `${recipe_name} 국`,
            recipe_id: 6,
          },
          {
            recipe_name: `${recipe_name} 튀김`,
            recipe_id: 7,
          },
        ],
      }),
    );
  }),
  rest.post(
    `${baseURL}${API_PATH.ADD_DIET_WITH_FAVORITE}/:date`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
        }),
      );
    },
  ),
  rest.post(
    `${baseURL}${API_PATH.ADD_DIET_WITH_CUSTOM}/:date`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
        }),
      );
    },
  ),
  rest.delete(`${baseURL}${API_PATH.DELETE_DIET}`, (req, res, ctx) => {
    const date = req.url.searchParams.get('date');
    const mealTime = req.url.searchParams.get('mealtime');
    return res(ctx.status(200));
  }),
  rest.get(
    `${baseURL}${API_PATH.DETAIL_RECIPE_REVIEW}/:recipe_id`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
          result: [
            {
              review_id: 6,
              recipe_id: 3,
              userid: 2,
              nickname: '쫑',
              content: '만들기 어렵네요.',
              image:
                'https://images.unsplash.com/photo-1576515652031-fc429bab6503?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
            },
            {
              review_id: 9,
              recipe_id: 3,
              userid: 4,
              nickname: '꽁',
              content: '정말 맛있어요',
              image:
                'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
            },
            {
              review_id: 10,
              recipe_id: 3,
              userid: 4,
              nickname: '농',
              content: '맛있었습니다!',
              image:
                'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
            },
            {
              review_id: 7,
              recipe_id: 3,
              userid: 5,
              nickname: '쏭',
              content: '정말 쉽고 간편해요.',
              image: null,
            },
            {
              review_id: 8,
              recipe_id: 3,
              userid: 5,
              nickname: '총',
              content: '정말 쉽고 간편해요.',
              image: null,
            },
            {
              review_id: 11,
              recipe_id: 3,
              userid: 5,
              nickname: '통',
              content: '간단하고 좋았어요',
              image: null,
            },
            {
              review_id: 12,
              recipe_id: 3,
              userid: 5,
              nickname: '홍',
              content: '정말 쉽고 간편해요.',
              image: null,
            },
            {
              review_id: 13,
              recipe_id: 3,
              userid: 5,
              nickname: '콩',
              content: '정말 쉽고 간편해요.',
              image: null,
            },
          ],
        }),
      );
    },
  ),
  rest.post(
    `${baseURL}${API_PATH.FAVORITE_RECIPE}/:recipe_id`,
    (req, res, ctx) => {
      console.log(req.body);
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
        }),
      );
    },
  ),
  rest.delete(
    `${baseURL}${API_PATH.DELETE_FAVORITE_RECIPE}/:recipe_id`,
    (req, res, ctx) => {
      console.log(req.body);
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
        }),
      );
    },
  ),
  rest.get(`${baseURL}${API_PATH.POSSIBLE_RECIPE}`, (req, res, ctx) => {
    const ingredientId = req.url.searchParams.get('ingredient_id');
    const recipe = [...RECIPE_LIST];
    return res(ctx.status(200), ctx.json({ id: ingredientId, result: recipe }));
  }),

  rest.post(`${baseURL}${API_PATH.FAVORITE_RECIPE}`, 
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "isSuccess": true,
        "code": 1000,
        "message": "성공",
        "result": [
            {
                "recipe_id": 2,
                "nickname": "쫑한",
                "summary": "묵은지로 만드는 맛있는 김치찌개",
                "img_url": "asdf",
                "recipe_name": "김치찌개",
                "star": null,
                "review_count": 0
            },
            {
      
              "recipe_id": 3,
                "nickname": "쫑",
                "summary": "간단한 파스타 요리",
                "img_url": "https://example.com/spaghetti.jpg",
                "recipe_name": "스파게티",
                "star": 3.5,
                "review_count": 8
              }
            ]
          })
        );
      }
    ),
  rest.post(
    `${baseURL}${API_PATH.NEW_REVIEW}/:recipe_id`,
    (req, res, ctx) => {
      const { star, content } = req.body; 
      const { recipe_id } = req.params; 
  
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
          addedReview: {
            recipe_id: recipe_id,
            star: star,
            content: content,
          },
        }),
      );
    },
  ),
  
  rest.get(`${baseURL}${API_PATH.MY_RECIPE}`, (req, res, ctx) => {
    const recipe = [...MY_RECIPE];
    return res(ctx.status(200), ctx.json({ result: recipe }));
  }),

  rest.get(`${baseURL}${API_PATH.MY_REVIEW}`, (req, res, ctx) => {
    const recipe = [...MY_REVIEW];
    return res(ctx.status(200), ctx.json({ result: recipe }));
  }),

  rest.delete(
    `${baseURL}${API_PATH.DELETE_MYREVIEW}/:recipe_id`,
    (req, res, ctx) => {
      console.log(req.body);
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1000,
          message: '성공',
        }),
      );
    },
  ),
];



export default recipeHandler;
//https://han-py.tistory.com/400 참고
