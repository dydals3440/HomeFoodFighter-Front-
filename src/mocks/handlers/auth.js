import { rest } from 'msw';
import { baseURL } from 'apis/api';
import { API_PATH } from 'constants/path';

const authHandler = [
  rest.post(`${baseURL}${API_PATH.LOGIN}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 1000,
        message: '성공',
        result: {
          userId: 2,
          jwt: 'IkpXVCJ9.eyJeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6..',
        },
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
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 1001,
        message: '사용 가능한 아이디입니다. ',
      }),
    );
  }),
  rest.get(
    `${baseURL}${API_PATH.CHECK_NICKNAME}/:nickname`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          isSuccess: true,
          code: 1001,
          message: '사용 가능한 닉네임입니다. ',
        }),
      );
    },
  ),
  rest.get(`${baseURL}${API_PATH.CHECK_EMAIL}/:email`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        isSuccess: true,
        code: 1002,
        message: '사용 가능한 이메일입니다. ',
      }),
    );
  }),

  rest.patch(`${baseURL}${API_PATH.WITHDRAWAL}`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ 
        "isSuccess": true,
         "code": 1000,
         "message": "성공"
    }),
    );
  }),

  rest.patch(`${baseURL}${API_PATH.CHANGE_PASSWORD}`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "isSuccess": true,
        "code": 1000,
        "message": "성공"
      }),
    );
  }),

  rest.get(`${baseURL}${API_PATH.USER_INFO}`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        "isSuccess": true,
        "code": 1000,
        "message": "성공",
        "result": [
            {
                "nickname": "하나빈",
                "name": "이원빈",
                "userid": 12,
                "image": null
            }
        ]
    }),
    );
  }),
];

export default authHandler;
