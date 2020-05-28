import React from 'react';

const IndividualOption = (props) => {
    return(
        <div>
            <li > 
                {props.optionText} &nbsp;&nbsp;&nbsp;&nbsp;

                <button onClick = {(e) =>
                                {props.deleteIndividual(props.optionText);}}>
                Remove
                </button>
            </li>
        </div>
    );
};

export default IndividualOption;