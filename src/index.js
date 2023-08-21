import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import App from './App';
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
  MyPageMyRecipe,
  MyPageMyReview,
  MyPageRecipe,
  MyPageSetting,
  MyPageHandlePasswordChange,
  MyPageNotice,
  MyPageProfileEdit,
  MyPageUnregister,
  Calender,
  CalenderRecipe,
  CalendarChoose,
  Search,
  Refrigerator,
  RefrigeratorIngredient,
  Popularity,
} from './pages';
import { worker } from './mocks/browser';
import { Provider } from 'jotai';
import LoginCheck from 'components/LoginCheck/LoginCheck';

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
        path: '/recipe/detail/:id',
        element: <DetailRecipe />,
      },
      {
        path: '/writereview/:id',
        element: (
          <LoginCheck>
            <WriteReview />
          </LoginCheck>
        ),
      },
      {
        path: '/jjimrecipe',
        element: (
          <LoginCheck>
            <JjimRecipe />
          </LoginCheck>
        ),
      },
      {
        path: '/jjimselect',
        element: (
          <LoginCheck>
            <JjimSelect />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage',
        element: (
          <LoginCheck>
            <MyPage />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage/recentview',
        element: (
          <LoginCheck>
            <MyPageRecentView />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage/handlepasswordchange',
        element: (
          <LoginCheck>
            <MyPageHandlePasswordChange />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage/jjimselect',
        element: (
          <LoginCheck>
            <MyPageJjimSelect />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage/myrecipe',
        element: (
          <LoginCheck>
            <MyPageMyRecipe />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage/myreview',
        element: (
          <LoginCheck>
            <MyPageMyReview />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage/recipe',
        element: (
          <LoginCheck>
            <MyPageRecipe />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage/setting',
        element: (
          <LoginCheck>
            <MyPageSetting />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage/notice',
        element: (
          <LoginCheck>
            <MyPageNotice />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage/profileedit',
        element: (
          <LoginCheck>
            <MyPageProfileEdit />
          </LoginCheck>
        ),
      },
      {
        path: '/mypage/unregister',
        element: <MyPageUnregister />,
      },
      {
        path: '/calendar',
        element: (
          <LoginCheck>
            <Calender />
          </LoginCheck>
        ),
      },
      {
        path: '/calendar/recipe',
        element: (
          <LoginCheck>
            <CalenderRecipe />
          </LoginCheck>
        ),
      },
      {
        path: '/calendar/choose',
        element: (
          <LoginCheck>
            <CalendarChoose />
          </LoginCheck>
        ),
      },
      {
        path: '/search',
        element: (
          <LoginCheck>
            <Search />
          </LoginCheck>
        ),
      },
      {
        path: '/refrigerator',
        element: (
          <LoginCheck>
            <Refrigerator />
          </LoginCheck>
        ),
      },
      {
        path: '/refrigerator/:ingredient',
        element: (
          <LoginCheck>
            <RefrigeratorIngredient />
          </LoginCheck>
        ),
      },
      {
        path: '/popularity',
        element: <Popularity />,
      },
    ],
  },
]);

// if (process.env.NODE_ENV === 'development') {
//   worker.start({ onUnhandledRequest: 'bypass' });
// }

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
