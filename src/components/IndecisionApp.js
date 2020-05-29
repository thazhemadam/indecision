import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };
    
    handleDeleteAll = () => {
        this.setState(()=>({ options: [] }));
    };

    handleDeleteIndividualOption = (option) => {
        // console.log('To delete', option)
        this.setState((prevState)=>({
            //returns the new array of elements that have all elements, except for the option that was supposed to be deleted.
            options: prevState.options.filter((allOptions)=> { return allOptions !== option})
        }));
    };

    handleChooseRandom = () => {
        const randomNum = Math.floor(Math.random()*(this.state.options.length));
        const randomOption = this.state.options[randomNum];
        // alert(option);
        this.setState(()=>({
            selectedOption: randomOption
        }));
    };

    handleAddNewOption = (newOption) => {
        
        //the first condition can be automatically handled by HTML's "required" attribute as well, if necessary.
        if(!newOption){
            return 'Please enter an option to be added.';
        }

        else if(this.state.options.indexOf(newOption)>-1){            
            return ('Task already Present and Pending!');
        }

        this.setState((prevState)=>({ options: prevState.options.concat(newOption)}));
    };

    clearModal = () => {
        this.setState((prevState)=>({
            selectedOption:!prevState.selectedOption
        }));
    };
    
    componentDidMount(){
        try{
            // console.log('Fetching Data from Local Storage.');
            const json = localStorage.getItem('indecisionOptions');
            const jsonOptions = JSON.parse(json);
            if(jsonOptions){
                this.setState(()=>({options: jsonOptions}));
            }
        }catch(e){
            console.log(e);
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        
        if(prevState.options.length !== this.state.options.length){
            // console.log('Saving data into local storage.');
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('indecisionOptions',json);
        }
    }

    render(){
        // const title = 'Indecision';
        const subtitle = "Helping you in makin'decisions";

        return(
            <div>
            
                <Header 
                    subtitle = {subtitle}
                />
                <div className = 'container'>
                    <Action 
                        optionsPresent = {this.state.options.length>0} 
                        handleChooseRandom = {this.handleChooseRandom} 
                    />
                    <div className="widget">
                        <Options 
                            options = {this.state.options} 
                            handleDeleteAll = {this.handleDeleteAll} 
                            handleDeleteIndividual = {this.handleDeleteIndividualOption}
                        />
                        <AddOption 
                            handleAddNewOption = {this.handleAddNewOption} 
                        />                    
                    </div>

                    <OptionModal 
                        modalTrigger = {this.state.selectedOption}
                        clearModal = {this.clearModal}
                    />
                </div>
            </div>
        )
    }
}
