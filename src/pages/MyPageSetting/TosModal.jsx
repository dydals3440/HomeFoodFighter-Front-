import React from 'react';
import Modal from 'react-modal';
import termsOfService from './TermsOfService';

const TosModal = ({ isOpen, onClose}) => {
  const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 뒷면 스타일
        zIndex: 1000
      },
      content: {
        padding: '2rem',
        width: '500px',
        height: '800px',
        margin: 'auto', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
        
      }

  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
    >

      <pre style={{ whiteSpace: 'pre-wrap', marginBottom: '2rem'}}>
        {termsOfService}
      </pre>

      <button style ={{backgroundColor: '#A5CE55', color: '#fff', border: 'none', fontSize: '1.1rem',width: '310px', height: '36px'}} onClick={onClose}>닫기</button>

        

      
    </Modal>
  );
};

export default TosModal;