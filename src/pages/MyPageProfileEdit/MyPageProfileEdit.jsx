import React, { useState } from 'react';
import {
  ProfileEditContainer,
  FormField,
  Label,
  Input,
  SubmitButton
} from './MyPageProfileEdit.styles';
import Header from '../../components/Header/Header';
import noImageSVG from '../../assets/MyPageSettingProfileDefaultImage.svg';

const MyPageProfileEdit = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState('');

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
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

  const handleSubmit = () => {
    console.log('닉네임 저장:', profileImage, nickname);
  };

  const topBarContainerStyle = {
    height: '830px',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Header>프로필 수정</Header>
      <div style={topBarContainerStyle}>
        <ProfileEditContainer>
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%', 
              overflow: 'hidden', 
              backgroundColor: 'white', 
              marginBottom: '20px',
            }}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="프로필 사진 미리보기"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <img
                src={noImageSVG} 
                alt="프로필 사진 미리보기"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </div>
          <label style={{ cursor: 'pointer', color: 'green', marginBottom: '30px' }}>
            사진 선택
            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleProfileImageChange} />
          </label>
          <h1></h1>
          
          <FormField>
            <Label style={{ width: '800px' }}></Label>
            <Input type="text" value={nickname} onChange={handleNicknameChange} placeholder="닉네임" />
          </FormField>
        
          <SubmitButton style={{ width: '120px', height: '25px', backgroundColor: 'white', color: 'black', border: '1px solid black', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={handleSubmit}>
            닉네임 저장
          </SubmitButton>
        </ProfileEditContainer>
      </div>
    </div>
  );
};

export default MyPageProfileEdit;