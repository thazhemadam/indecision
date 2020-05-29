import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    
    <Modal
        isOpen={!!props.modalTrigger}
        onRequestClose={props.clearModal}
        contentLabel="SelectedOption"
        appElement={document.getElementById('app')}
        closeTimeoutMS={200}
        className='modal'
    >

        <h3 className='modal__title'>Selected Option</h3>
        {props.modalTrigger && <p className='modal__text'>{props.modalTrigger}</p>}
        <button className='button' onClick = {props.clearModal}>Okay</button>
    </Modal>

);

export default OptionModal;

