// MyPageProfileEdit.jsx

import React, { useState } from 'react';
import { ProfileEditContainer} from './MyPageProfileEdit.styles';
import Header from '../../components/Header/Header';


const MyPageProfileEdit = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState('');

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    // 프로필 사진을 미리보기에 표시
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setProfileImage(null);
    }
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  return (
    <ProfileEditContainer>
      <Header>
        <h1>프로필 수정</h1>
      </Header>

      {/* 프로필 사진 미리보기 */}
      {profileImage && <img src={profileImage} alt="프로필 사진 미리보기" style={{ width: '200px', height: '200px', marginBottom: '20px' }} />}
      <input type="file" accept="image/*" onChange={handleProfileImageChange} />

      {/* 닉네임 변경 칸 */}
      <input type="text" value={nickname} onChange={handleNicknameChange} />

      {/* 이곳에 나머지 프로필 수정 화면 요소들을 추가하세요 */}
    </ProfileEditContainer>
  );
};

export default MyPageProfileEdit;
