import { baseURL } from 'apis/api';
import { API_PATH } from 'constants/path';
import { rest } from 'msw';

const refrigeratorHandler = [
  rest.post(
    `${baseURL}${API_PATH.FILL_REFRIGERATOR}/:ingre_type`,
    (req, res, ctx) => {
      const data = req.body;
      const { ingre_type } = req.params;
      return res(ctx.status(200), ctx.json({ data, ingre_type }));
    },
  ),
];

export default refrigeratorHandler;
