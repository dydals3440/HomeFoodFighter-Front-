import React, { useState } from 'react';

const ProfileImagePreview = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nickname, setNickname] = useState('');


  const handleImageChange = (e) => {
    // 이미지 선택 및 미리보기 관련 로직은 여기서 처리합니다.
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleProfileSetup = () => {
    // 프로필 설정 관련 로직은 여기서 처리합니다.
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* 이미지 미리보기 */}
      {selectedImage ? (
        <img src={selectedImage} alt="Preview" style={{ width: '200px' }} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: noImageSVG }} />
      )}

      {/* 프로필 사진 선택 버튼 */}
      <label htmlFor="fileInput" style={{ marginTop: '10px' }}>
        프로필 사진 선택
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {/* 닉네임 입력 */}
      <input
        type="text"
        value={nickname}
        onChange={handleNicknameChange}
        placeholder="닉네임을 입력하세요"
        style={{ marginTop: '10px', width: '200px', fontSize: '14px' }}
      />

      {/* 프로필 설정 버튼 */}
      <button onClick={handleProfileSetup} style={{ marginTop: '10px' }}>
        프로필 설정
      </button>
    </div>
  );
};

export default ProfileImagePreview;
