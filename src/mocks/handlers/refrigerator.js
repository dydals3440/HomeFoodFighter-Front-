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
  rest.post(`${baseURL}${API_PATH.EMPTY_REFRIGERATOR}`, (req, res, ctx) => {
    const data = req.body;
    return res(ctx.status(200), ctx.json({ data }));
  }),
  rest.get(`${baseURL}${API_PATH.REFRIGERATOR}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 1000,
        message: '성공',
        result: [
          {
            ingre_id: 2,
            ingre_type: 1,
            ingre_name: '다진파',
            ingre_english: 'Chopped Green Onion',
          },
          {
            ingre_id: 1,
            ingre_type: 1,
            ingre_name: '미나리',
            ingre_english: 'Water Dropwort',
          },
          {
            ingre_id: 1,
            ingre_type: 1,
            ingre_name: '미나리',
            ingre_english: 'Water Dropwort',
          },
          {
            ingre_id: 1,
            ingre_type: 1,
            ingre_name: '미나리',
            ingre_english: 'Water Dropwort',
          },
          {
            ingre_id: 1,
            ingre_type: 1,
            ingre_name: '미나리',
            ingre_english: 'Water Dropwort',
          },
          {
            ingre_id: 1,
            ingre_type: 1,
            ingre_name: '미나리',
            ingre_english: 'Water Dropwort',
          },
          {
            ingre_id: 1,
            ingre_type: 1,
            ingre_name: '미나리',
            ingre_english: 'Water Dropwort',
          },
          {
            ingre_id: 1,
            ingre_type: 1,
            ingre_name: '미나리',
            ingre_english: 'Water Dropwort',
          },
          {
            ingre_id: 198,
            ingre_type: 2,
            ingre_name: '쌀',
            ingre_english: 'Rice',
          },
          {
            ingre_id: 199,
            ingre_type: 2,
            ingre_name: '멥쌀',
            ingre_english: 'Glutinous Rice',
          },
          {
            ingre_id: 260,
            ingre_type: 3,
            ingre_name: '안심',
            ingre_english: 'Lean Meat',
          },
          // {
          //   ingre_id: 384,
          //   ingre_type: 4,
          //   ingre_name: '소금',
          //   ingre_english: 'Salt',
          // },
          {
            ingre_id: 508,
            ingre_type: 5,
            ingre_name: '청포묵',
            ingre_english: 'Clear mung bean jelly',
          },
        ],
      }),
    );
  }),
];

export default refrigeratorHandler;
