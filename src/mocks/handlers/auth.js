import { rest } from 'msw';
import { baseURL } from 'apis/api';
import { API_PATH } from 'constants/path';
import {
  DUPLICATE_ID_CHECK,
  DUPLICATE_NICKNAME_CHECK,
  DUPLICATE_EMAIL_CHECK,
} from 'constants/auth';

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
  rest.get(`${baseURL}${API_PATH.CHECK_ID}/:id`, (req, res, ctx) => {
    console.log(req.params);
    alert('입력하신 아이디를 사용하실 수 있습니다.');
    const checkId = [...DUPLICATE_ID_CHECK];
    return res(ctx.status(200), ctx.json({ result: checkId }));
  }),
  rest.get(
    `${baseURL}${API_PATH.CHECK_NICKNAME}/:nickname`,
    (req, res, ctx) => {
      console.log(req.body);
      alert('입력하신 닉네임을 사용하실 수 있습니다.');
      const checkNickName = [...DUPLICATE_NICKNAME_CHECK];
      return res(ctx.status(200), ctx.json({ result: checkNickName }));
    },
  ),
  rest.get(`${baseURL}${API_PATH.CHECK_EMAIL}/:email`, (req, res, ctx) => {
    console.log(req);
    alert('입력하신 이메일을 사용하실 수 있습니다.');
    const checkEmail = [...DUPLICATE_EMAIL_CHECK];
    return res(ctx.status(200), ctx.json({ result: checkEmail }));
  }),
];

export default authHandler;
