import React from 'react';

const IndividualOption = (props) => (
        <div className='option'>
            
                <p className='option__text'>{props.count}. {props.optionText} </p>

                <button 
                    className='button--link'
                    onClick = {(e) =>
                                {props.deleteIndividual(props.optionText);}}>
                Remove
                </button>
        </div>
);


export default IndividualOption;