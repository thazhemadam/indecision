import React from 'react';

const Action = (props) => {
    return (
    <div>
        <button onClick = {props.handleChooseRandom} disabled = {!props.optionsPresent}>What should I do?</button>
    </div>
    );
}

export default Action;