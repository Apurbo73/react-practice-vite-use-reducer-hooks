import React from 'react';

const Modal = ({modalText}) => {
    console.log(modalText);
    return (
        <div>
            <p>{modalText}</p>
        </div>
    );
};

export default Modal;