import React from 'react';

const Action = (props) => (
    <div>
        <button 
            className='big-button'
            onClick = {props.handleChooseRandom} 
            disabled = {!props.optionsPresent}
        >What should I do?</button>
    </div>
);


export default Action;