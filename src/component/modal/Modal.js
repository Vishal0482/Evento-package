
import React from 'react'
import "./Modal.css"
import { createPortal } from 'react-dom';

const Modal = ({  children, isOpen, handleClose }) => {
	if(!isOpen) return null;
	return createPortal(
	  <div >
		  {children}
	  </div>
	, document.getElementById('modal-root'));
};
export default Modal