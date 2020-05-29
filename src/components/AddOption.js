import React from 'react';

export default class AddOption extends React.Component{
    
    state = {
        error: undefined
    };
    
    handleNewOption = (e) => {
        
        e.preventDefault();
        const option = e.target.elements.newOption.value.trim();
        const errorAfterAddOption= this.props.handleAddNewOption(option);

        this.setState(()=>({ error:errorAfterAddOption }));
        if(!errorAfterAddOption){
            e.target.elements.newOption.value = "";
        }
    };
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleNewOption}>
                    <input type='text' placeholder = 'What should I do hmm.?' id = 'newOption' autoComplete="off"></input>
                    <button>What to do.</button>
                </form>
            </div>
        )
    }
}
