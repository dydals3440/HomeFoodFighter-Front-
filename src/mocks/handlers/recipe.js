import { baseURL } from 'apis/api';
import { API_PATH } from 'constants/path';
import { RECIPE_LIST } from 'constants/recipe';
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
                recipe_id: 3,
                userid: 2,
                user_img_url:
                  'https://media.istockphoto.com/id/1401542006/ko/%EC%82%AC%EC%A7%84/%ED%99%94%EC%83%81-%ED%86%B5%ED%99%94%EB%A1%9C-%EC%83%81%EB%8B%B4%ED%95%98%EB%8A%94-%EA%B0%84%ED%98%B8%EC%82%AC.jpg?s=612x612&w=is&k=20&c=hFzFtzONto5nQab7RKbMxb_9bgG5D8q-X_ZHHkbh9y8=',
                nickname: '쫑',
                recipe_name: '스파게티',
                cook_time: 30,
                difficulty: '보통',
                img_url:
                  'https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80',
                quantity: '4인분',
              },
            ],
            [
              {
                cook_order: 1,
                description: '감자와 야채들을 씻어줍니다',
                order_img_url:
                  'https://plus.unsplash.com/premium_photo-1670895801174-8278045808f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
              },
              {
                cook_order: 2,
                description: '재료를 손톱만큼 다져줍니다',
                order_img_url:
                  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
              },
            ],
            [
              {
                recipe_id: 3,
                DetailIngre_type: 1,
                ingre_name: '감자',
                ingre_english: 'potato',
                amount: '10g',
              },
              {
                recipe_id: 3,
                DetailIngre_type: 2,
                ingre_name: '버섯',
                ingre_english: 'mushroom',
                amount: '60g',
              },
              {
                recipe_id: 3,
                DetailIngre_type: 3,
                ingre_name: '소금',
                ingre_english: 'mushroom',
                amount: '60g',
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
  rest.delete(`${baseURL}${API_PATH.DELETE_DIET}`, (req, res, ctx) => {
    const date = req.url.searchParams.get('date');
    const mealTime = req.url.searchParams.get('mealtime');
    return res(ctx.status(200));
  }),
];

export default recipeHandler;
//https://han-py.tistory.com/400 참고
