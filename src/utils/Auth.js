import { redirect } from 'react-router-dom';

import { requestLogin } from 'apis/request/auth';

// 로그인 함수
export async function handleLogin(email, password) {
  try {
    const authData = {
      email: email,
      password: password,
    };

    const response = await requestLogin(authData);

    if (response.status === 200) {
      const token = response.data.result.jwt;
      // 토큰을 localStorage 등에 저장하고, 필요한 처리를 진행할 수 있습니다.
      localStorage.setItem('token', token);
      redirect('/');
    } else {
      // 로그인 실패
      alert('로그인이 실패되었습니다.');
      console.log('에러 메시지:', response.data.message);
    }
  } catch (error) {
    console.error('에러 발생:', error);
  }
}

// 토큰을 받아오는 함수 (토큰이 필요한 곳에서 사용 요망!)
export function getAuthToken() {
  const token = localStorage.getItem('token');
  return token;
}
