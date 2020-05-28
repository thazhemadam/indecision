class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleChooseRandom = this.handleChooseRandom.bind(this);
        this.handleAddNewOption = this.handleAddNewOption.bind(this);
        this.handleDeleteIndividualOption = this.handleDeleteIndividualOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    handleDeleteAll(){
        this.setState(()=>({ options: [] }));
    }

    handleDeleteIndividualOption(option){
        // console.log('To delete', option)
        this.setState((prevState)=>({
            //returns the new array of elements that have all elements, except for the option that was supposed to be deleted.
            options: prevState.options.filter((allOptions)=> { return allOptions !== option})
        }));
    }

    handleChooseRandom(){
        const randomNum = Math.floor(Math.random()*(this.state.options.length));
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddNewOption(newOption){
        
        //the first condition can be automatically handled by HTML's "required" attribute as well, if necessary.
        if(!newOption){
            return 'Please enter an option to be added.';
        }

        else if(this.state.options.indexOf(newOption)>-1){            
            return ('Task already Present and Pending!');
        }

        this.setState((prevState)=>({ options: prevState.options.concat(newOption)}));
    }

    render(){
        // const title = 'Indecision';
        const subtitle = "Helping you in makin'decisions";

        return(
            <div>
                <Header subtitle = {subtitle}/>
                <Action optionsPresent = {this.state.options.length>0} handleChooseRandom = {this.handleChooseRandom} />
                <Options options = {this.state.options} handleDeleteAll = {this.handleDeleteAll} handleDeleteIndividual = {this.handleDeleteIndividualOption}/>
                <AddOption handleAddNewOption = {this.handleAddNewOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options : ['1','2','3']
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
        return (
        <div>
            <button onClick = {props.handleChooseRandom} disabled = {!props.optionsPresent}>What should I do?</button>
        </div>
        );
}

const Options = (props) => {
    return(
        <div>
            {/* Button to remove all options. */}
            <button onClick = {props.handleDeleteAll}>Remove all</button>
            
            {
                //Displays each option, as a separate option.
                props.options.map((option) => <IndividualOption key = {option} optionText = {option} deleteIndividual = {props.handleDeleteIndividual}/>)
            }
        </div>        
    );
}

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
}

class AddOption extends React.Component{
    
    constructor(props){
        super(props);
        this.handleNewOption = this.handleNewOption.bind(this);
        this.state = {
            error:undefined
        }
    }
    handleNewOption(e){
        
        e.preventDefault();
        const option = e.target.elements.newOption.value.trim();
        document.getElementById("newOption").value = "";

        const errorAfterAddOption= this.props.handleAddNewOption(option);

        this.setState(()=>({ error:errorAfterAddOption }));
    }
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

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));