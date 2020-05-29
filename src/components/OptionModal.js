import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (
    
    <Modal
    isOpen={!!props.modalTrigger}
    onRequestClose={props.clearModal}
    contentLabel="SelectedOption"
    appElement={document.getElementById('app')}
    >

        <h3>Selected Option</h3>
        {props.modalTrigger && <p>{props.modalTrigger}</p>}
        <button onClick = {props.clearModal}>Okay</button>
    </Modal>

);

export default OptionModal;

