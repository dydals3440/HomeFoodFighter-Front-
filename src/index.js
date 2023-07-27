import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  Main,
  Login,
  SignUp,
  MemberFind,
  AllRecipe,
  DetailRecipe,
  WriteReview,
  NotFound,
  JjimRecipe,
  JjimSelect,
  MyPage,
  MyPageRecentView,
  MyPageJjimSelect,
  MyPageReview,
  MyPageRecipe,
  MyPageSetting,
  MyPageNotice,
  Calender,
  CalenderRecipe,
  Search,
  Refrigerator,
  RefrigeratorIngredient,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/memberfind',
        element: <MemberFind />,
      },
      {
        path: '/allrecipe',
        element: <AllRecipe />,
      },
      {
        path: 'detailrecipe/:id',
        element: <DetailRecipe />,
      },
      {
        path: '/writereview',
        element: <WriteReview />,
      },
      {
        path: '/jjimrecipe',
        element: <JjimRecipe />,
      },
      {
        path: '/jjimselect',
        element: <JjimSelect />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/mypage/recentview',
        element: <MyPageRecentView />,
      },
      {
        path: '/mypage/jjimselect',
        element: <MyPageJjimSelect />,
      },
      {
        path: '/mypage/review',
        element: <MyPageReview />,
      },
      {
        path: '/mypage/recipe',
        element: <MyPageRecipe />,
      },
      {
        path: '/mypage/setting',
        element: <MyPageSetting />,
      },
      {
        path: '/mypage/notice',
        element: <MyPageNotice />,
      },
      {
        path: '/calendar',
        element: <Calender />,
      },
      {
        path: '/calendar/recipe',
        element: <CalenderRecipe />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/refrigerator',
        element: <Refrigerator />,
      },
      {
        path: '/refrigerator/:ingredient',
        element: <RefrigeratorIngredient />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
