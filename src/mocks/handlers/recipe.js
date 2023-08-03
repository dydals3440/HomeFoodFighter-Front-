import { baseURL } from 'apis/api';
import { API_PATH } from 'constants/path';
import { RECIPE_LIST } from 'constants/recipe';
import { rest } from 'msw';

const date = new Date();
const currentCalendarData = {
  isSuccess: true,
  code: 1000,
  message: '성공',
  result: [
    {
      userid: 5,
      recipe_id: 2,
      bydate: '2023-07-24',
      meal_time: 1,
      name: null,
    },
    {
      userid: 5,
      recipe_id: 2,
      bydate: '2023-07-27',
      meal_time: 1,
      name: null,
    },
    {
      userid: 5,
      recipe_id: null,
      bydate: '2023-07-24',
      meal_time: 2,
      name: '장조림',
    },
    {
      userid: 5,
      recipe_id: null,
      bydate: '2023-07-24T15:00:00.000Z',
      meal_time: 2,
      name: '장조림',
    },
    {
      userid: 5,
      recipe_id: null,
      bydate: '2023-07-24T15:00:00.000Z',
      meal_time: 1,
      name: '장조림',
    },
    {
      userid: 5,
      recipe_id: 3,
      bydate: '2023-07-24T15:00:00.000Z',
      meal_time: 2,
      name: '토마토스파게티',
    },
    {
      userid: 5,
      recipe_id: 2,
      bydate: '2023-07-24T15:00:00.000Z',
      meal_time: 2,
      name: '토마토스파게티',
    },
    {
      userid: 5,
      recipe_id: 3,
      bydate: '2023-07-24T15:00:00.000Z',
      meal_time: 2,
      name: '스파게티',
    },
    {
      userid: 5,
      recipe_id: 2,
      bydate: '2023-07-24T15:00:00.000Z',
      meal_time: 2,
      name: '김치찌개',
    },
    {
      userid: 5,
      recipe_id: 3,
      bydate: '2023-07-26T15:00:00.000Z',
      meal_time: 2,
      name: '스파게티',
    },
    {
      userid: 5,
      recipe_id: 2,
      bydate: '2023-07-26T15:00:00.000Z',
      meal_time: 2,
      name: '김치찌개',
    },
    {
      userid: 5,
      recipe_id: 2,
      bydate: '2023-07-26T15:00:00.000Z',
      meal_time: 2,
      name: '김치찌개',
    },
  ],
};

const recipeHandler = [
  rest.get(`${baseURL}${API_PATH.POPULAR_RECIPE}`, (req, res, ctx) => {
    const recipe = [...RECIPE_LIST];
    return res(ctx.status(200), ctx.json({ result: recipe }));
  }),
  rest.get(`${baseURL}${API_PATH.FAVORITE_RECIPE}`, (req, res, ctx) => {
    const recipe = [...RECIPE_LIST];
    return res(ctx.status(200), ctx.json({ result: recipe }));
  }),
  rest.get(`${baseURL}${API_PATH.WEEK_CALENDAR}/:date`, (req, res, ctx) => {
    const { date } = req.params;
    return res(ctx.status(200), ctx.json({ date, ...currentCalendarData }));
  }),
  rest.get(`${baseURL}${API_PATH.SEARCH_RECIPE}`, (req, res, ctx) => {
    const recipe_name = req.url.searchParams.get('recipe_name');
    return res(ctx.status(200), ctx.json({ recipe_name }));
  }),
];

export default recipeHandler;
//https://han-py.tistory.com/400 참고
