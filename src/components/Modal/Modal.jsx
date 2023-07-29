import classes from './Modal.module.css';
import { Fragment, React } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
Backdrop.propTypes = {
  children: PropTypes.node.isRequired,
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className="classes.content">{props.children}</div>
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {/* 위에 처럼 사용하면 루트 요소에 들어감 */}
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </Fragment>
  );
};
Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
