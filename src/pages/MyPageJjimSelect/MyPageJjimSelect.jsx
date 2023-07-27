import React from 'react';
import JjimMenu from '../../components/JjimMenu/JjimMenu';
import { MenuGrid } from './MyPageJjimSelect.styled'; 



  const MyPageJjimSelect = () => {
    const menuData = [
      { name: '메뉴1', image: 'image1.jpg', author: '작성자1', rating: 4.8, reviewCount: 10 },
      { name: '메뉴2', image: 'image2.jpg', author: '작성자2', rating: 3.5, reviewCount: 5 },
      // ... 다른 메뉴 데이터들
    ];
  
    return (
      <MenuGrid>
        {menuData.map((menu, index) => (
          <JjimMenu
            key={index}
            menuName={menu.name}
            menuImage={menu.image}
            menuAuthor={menu.author}
            menuRating={menu.rating}
            reviewCount={menu.reviewCount}
          />
        ))}
      </MenuGrid>
    );
  };

export default MyPageJjimSelect;
