import { rest } from 'msw';
import { baseURL } from 'apis/api';
import { API_PATH } from 'constants/path';

const authHandler = [
  rest.post(`${baseURL}${API_PATH.LOGIN}`, (req, res, ctx) => {
    console.log(req.body);
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 1000,
        message: '성공',
      }),
    );
  }),
  rest.post(`${baseURL}${API_PATH.FINDING}`, (req, res, ctx) => {
    console.log(req.body);
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 1000,
        message: '성공',
      }),
    );
  }),
  rest.post(`${baseURL}${API_PATH.SIGNUP}`, (req, res, ctx) => {
    console.log(req.body);
    alert('회원가입이 완료되었습니다.');
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 1000,
        message: '성공',
      }),
    );
  }),
];

export default authHandler;
