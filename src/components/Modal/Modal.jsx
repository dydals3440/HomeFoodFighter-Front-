import { Fragment } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';
import Button from 'components/Button/Button';

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>
          {props.text}
          <Button height={'1rem'}>확인하기</Button>
        </ModalOverlay>,
        portalElement,
      )}
    </Fragment>
  );
};

export default Modal;
