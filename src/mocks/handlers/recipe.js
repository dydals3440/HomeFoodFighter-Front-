import { baseURL } from 'apis/api';
import { API_PATH } from 'constants/path';
import { RECIPE_LIST } from 'constants/recipe';
import { rest } from 'msw';

const recipeHandler = [
  rest.get(`${baseURL}${API_PATH.POPULAR_RECIPE}`, (req, res, ctx) => {
    const recipe = [...RECIPE_LIST];
    return res(ctx.status(200), ctx.json({ result: recipe }));
  }),
  rest.get(`${baseURL}${API_PATH.FAVORITE_RECIPE}`, (req, res, ctx) => {
    const recipe = [...RECIPE_LIST];
    return res(ctx.status(200), ctx.json({ result: recipe }));
  }),
];

export default recipeHandler;
//https://han-py.tistory.com/400 참고
