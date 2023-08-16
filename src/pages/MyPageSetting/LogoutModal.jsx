import React from 'react';
import Modal from 'react-modal';

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 뒷면 스타일
        zIndex: 1000
      },
      content: {
        width: '300px',
        height: '180px',
        margin: 'auto', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: '0.5rem',
      }

  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
    >
      <p style ={{marginBottom: '1.7rem'}}>로그아웃 하시겠습니까?</p>
      <button style ={{backgroundColor: 'white', color: '#1FBC02', border: 'none', text: '2rem'}} onClick={onLogout}>확인</button>
    </Modal>
  );
};

export default LogoutModal;