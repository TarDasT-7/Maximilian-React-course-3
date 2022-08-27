import React , { Fragment } from "react";
import ReactDOM  from "react-dom";
import styles from './Modal.module.scss';


const Backdrop = props =>{
    return(
        <div className={styles.backdrop} onClick={props.onHideCart}></div>
    );
};

const ModalOverlay = props =>{
    return(
        <div className={styles.modal}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
};

const portElement = document.getElementById('overlays');

const Modal = (props) => {
    return(

        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portElement)}
        </Fragment>
    );
};

export default Modal;