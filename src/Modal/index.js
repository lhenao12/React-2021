import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Modal.css'


function Modal({children, setOpenModal}){

    const handleClick = () =>{
        setOpenModal(false);
    
        }

    return ReactDOM.createPortal(
    <div className="ModalBackground">
    {children}
     
     <div>
        
     </div>

     <span onClick={handleClick}></span>

    </div>,
    document.getElementById('modal')
    );

}


export { Modal };