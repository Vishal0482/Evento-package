import React from 'react';
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