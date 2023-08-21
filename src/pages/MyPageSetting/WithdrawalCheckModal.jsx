import React, { useState } from 'react';
import Modal from 'react-modal';
import { requestWithDarwal } from 'apis/request/auth';

const WithdrawalCheckModal = ({ isOpen, onClose, onCheck }) => {

  const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 뒷면 스타일
        zIndex: 1000
      },
      content: {
        width: '388px',
        height: '310px',
        margin: 'auto', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        
      }
  };
  const [confirmWithdrawal] = useState(false);


  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2.5rem' }}>
        <p style={{ color: '#A5CE55', marginRight: '0.2rem', fontWeight: 'bolder' }}>회원탈퇴</p>
        <p>가 완료되었습니다.</p>
      </div>
      <p style ={{fontWeight: 'lighter', marginBottom: '5rem', fontSize: '0.8rem'}}> 보다 나은 홈푸파로 다시 만나뵐 수 있기를 바랍니다.</p>

      <button style ={{backgroundColor: '#A5CE55', color: '#fff', border: 'none', fontSize: '1.1rem',width: '310px', height: '36px',}} onClick={onCheck}>홈푸파 홈 바로가기</button>
    </Modal>
  );
};

export default WithdrawalCheckModal;