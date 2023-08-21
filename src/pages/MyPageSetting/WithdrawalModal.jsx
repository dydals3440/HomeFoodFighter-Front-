import React from 'react';
import Modal from 'react-modal';
import { requestWithDrawal } from 'apis/request/auth';
import useError from 'hooks/useError';
import WithdrawalCheckModal from './WithdrawalCheckModal';
import { useNavigate } from 'react-router-dom';

const WithdrawalModal = ({ isOpen, onClose }) => {

  const handleError = useError();
  const navigate = useNavigate()
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

  const onConfirm = (e) => {
    e.preventDefault();
    console.log('CLICK CONFIRM')
    requestWithDrawal().then((res) => {
      if(!res.data.isSuccess) throw res.data;
      else {
          localStorage.removeItem('token');
          navigate('/')
      }
    }).catch((e) => handleError(e));
  }
  



  return (
    <>
 
        <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
    >
      <p style ={{marginBottom: '1.7rem'}}>탈퇴하면 앞으로 이 계정에서 로그인할 수 없고 
이 계정을 다시 복구할 수 없습니다. </p>
      <p style ={{marginBottom: '1.7rem'}}> - 공공의 성격을 가진 게시물은 탈퇴 후에도 삭제되지 않으므로 반드시 직접 삭제하신 후 탈퇴해 주시기 바랍니다. </p>
      <p style ={{fontWeight: 'bold', marginBottom: '1.7rem'}}> 탈퇴하려면 아래 확인버튼을 클릭해주세요.</p>

      <button style ={{backgroundColor: '#A5CE55', color: '#fff', border: 'none', text: '2rem',width: '310px', height: '36px', cursor: 'pointer'}} onClick={onConfirm}>확인</button>
    </Modal>
    </>

  );
};

export default WithdrawalModal;