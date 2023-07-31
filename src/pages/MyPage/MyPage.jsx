import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import noImageSVG from '../../assets/MyPageSettingProfileDefaultImage.svg';
import MyPageRecentView from '../../assets/MyPageRecentViewImage.svg';
import MyPageJJim from '../../assets/DetailrecipeJjimIcon.svg';
import MyPageMyReview from '../../assets/MyPageMyReviewImage.svg';
import MyPageMyRecipe from '../../assets/MyPageMyRecipeImage.svg';
import MyPageSetting from '../../assets/MyPageSettingImage.svg';

const ImagePreview = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nickname] = useState('John Doe'); // 닉네임 값을 예시로 설정

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMenuClick = (menu) => {
    // 메뉴 클릭 이벤트 처리 함수
    console.log(`메뉴 "${menu}"가 클릭되었습니다.`);
  };

  return (
    <div>
      <Header>
      <button style={{ border: 'none', background: 'none', cursor: 'pointer' }} onClick={() => handleMenuClick('MyPageSetting')}>
          <img src={MyPageSetting} style={{ width: '30px', marginLeft: '650px'  }} alt="Setting" />
        </button>
      </Header>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* 이미지 미리보기 */}
        {selectedImage ? (
          <img src={selectedImage} alt="Preview" style={{ width: '200px', marginTop: '20px' }} />
        ) : (
          <div>
            {/* SVG 파일 경로로 이미지 표시 */}
            <img src={noImageSVG} alt="No Image" style={{ width: '100px', marginTop: '20px' }} />
          </div>
        )}

        {/* 닉네임 입력 */}
        <div style={{ marginTop: '30px', marginBottom: '10px', fontSize: '18px' }}>
          닉네임: {nickname}
        </div>

        {/* 메뉴 칸 */}
        <div
          style={{
            marginTop: '100px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0px',
            width: '100%',
          }}
        >
          {/* 내가 본 레시피 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '30px',
              border: '1px solid lightgray',
              borderRadius: '10px', // 둥근 모서리
            }}
            onClick={() => handleMenuClick('내가 본 레시피')}
          >
            <img src={MyPageRecentView} alt="내가 본 레시피" style={{ width: '50px' }} />
            <span style={{ marginTop: '10px' }}>내가 본 레시피</span>
          </div>

          {/*찜한 레시피 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '30px',
              border: '1px solid lightgray',
              borderRadius: '10px', // 둥근 모서리
            }}
            onClick={() => handleMenuClick('찜한 레시피')}
          >
            <img src={MyPageJJim} alt="찜한 레시피" style={{ width: '30px' }} />
            <span style={{ marginTop: '10px' }}>찜한 레시피</span>
          </div>

          {/* 내 리뷰 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '30px',
              border: '1px solid lightgray',
              borderRadius: '10px', // 둥근 모서리
            }}
            onClick={() => handleMenuClick('내 리뷰')}
          >
            <img src={MyPageMyReview} alt="내 리뷰" style={{ width: '40px' }} />
            <span style={{ marginTop: '10px' }}>내 리뷰</span>
          </div>

          {/* 내 레시피 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              padding: '30px',
              border: '1px solid lightgray',
              borderRadius: '10px', // 둥근 모서리
            }}
            onClick={() => handleMenuClick('내 레시피')}
          >
            <img src={MyPageMyRecipe} alt="내 레시피" style={{ width: '40px' }} />
            <span style={{ marginTop: '10px' }}>내 레시피</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
