import React from 'react';
import IndividualOption from './IndividualOption'

const Options = (props) => {
    return(
        <div>
            {/* Button to remove all options. */}
            <button onClick = {props.handleDeleteAll}>Remove all</button>
            {props.options.length==0 && <p>Please add an option to get started.</p>}
            {
                //Displays each option, as a separate option.
                props.options.map((option) => <IndividualOption key = {option} optionText = {option} deleteIndividual = {props.handleDeleteIndividual}/>)
            }
        </div>        
    );
}

export default Options;