import React from 'react';
import IndividualOption from './IndividualOption'

const Options = (props) => (
        <div>
            <div className='widget-header'>
                <h3 className = 'widget-header__title'>Tasks Pending</h3>
                <button className='button--link' onClick = {props.handleDeleteAll}>Remove all</button>
                </div>
                {props.options.length==0 && <p className='widget__message'>Please add an option to get started.</p>}
                {
                    //Displays each option, as a separate option.
                    props.options.map((option, index) => <IndividualOption 
                        key = {option} 
                        optionText = {option} 
                        deleteIndividual = {props.handleDeleteIndividual}
                        count = {index+1}
                        />)
                }
            
        </div>        
);


export default Options;