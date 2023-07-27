import React from 'react';
import Modal from '../Modal/Modal';

export const Alert = () => {
  return (
    <Modal>
      <h3>
        아이디 / 비밀번호 찾기 안내 메일을 발송했습니다. 메일을 확인해 주세요
      </h3>
      <button>확인</button>
    </Modal>
  );
};
