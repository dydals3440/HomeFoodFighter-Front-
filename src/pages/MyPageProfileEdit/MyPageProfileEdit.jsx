import React, { useState } from 'react';
import {
  ProfileEditContainer,
  FormField,
  Label,
  Input,
  SubmitButton
} from './MyPageProfileEdit.styles';

import useInput from 'hooks/useInput';
import {
  changeNickname,
  requestCheckDuplicateNickName
}from 'apis/request/auth';

import useError from 'hooks/useError';

import Header from '../../components/Header/Header';
import noImageSVG from '../../assets/MyPageSettingProfileDefaultImage.svg';
import { useNavigate } from 'react-router-dom';


const isEmpty = (value) => value.trim() !== '';

const MyPageProfileEdit = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  
  const handleError = useError();

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

  const {
    value: enteredNickName,
    isValid: enteredNickNameIsValid,
    hasError: nickNameInputHasError,
    valueChangeHandler: nickNameChangedHandler,
    inputBlurHandler: nickNameBlurHandler,
  } = useInput(isEmpty);



  const handleChangeNickname = (e) => {
    e.preventDefault();
    console.log(enteredNickName)
    changeNickname(enteredNickName).then((res) => {
        if (!res.data.isSuccess) throw res.data;
        else {
          navigate('/mypage');
          alert('닉네임이 변경되었습니다.');
        }
      })
      .catch((e) => handleError(e));
  };


  const topBarContainerStyle = {
    height: '830px',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  let formIsValid = enteredNickNameIsValid;

  if (enteredNickNameIsValid){
    formIsValid = true;
  }

  return (
    <div style={{ position: 'relative', minHeight: '100%' }}>
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

            <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleProfileImageChange} />
    
          <h1></h1>
          
          <FormField>
            <Label style={{ width: '800px' }}></Label>
            <Input 
              name="nickname" 
              type="text"
              placeholder="닉네임" 
              maxLength="7" 
              onChange={nickNameChangedHandler}
              onBlur={nickNameBlurHandler}
              value={enteredNickName}
              />
          </FormField>
        

          <SubmitButton style={{ padding:'1.5rem 2rem', width: '120px', height: '25px', backgroundColor: '#8fbc8f', color: 'black', border: '1px solid #a5ce55', borderRadius:'1rem',fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', whiteSpace: 'nowrap' }} onClick={handleChangeNickname}>
            닉네임 변경
          </SubmitButton>
        

      
        </ProfileEditContainer>
      </div>
    </div>
  );
};

export default MyPageProfileEdit;