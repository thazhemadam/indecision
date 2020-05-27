class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handleChooseRandom = this.handleChooseRandom.bind(this);
        this.handleAddNewOption = this.handleAddNewOption.bind(this);
        this.state = {
            options: ['1','2','3','4','5']
        };
    }

    handleDeleteAll(){
        this.setState(()=>{
            return {
                options: []
            };
        });
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

        this.setState((prevState)=>{ 
            return{
                options: prevState.options.concat(newOption)
            };
        });
    }

    render(){
        const title = 'Indecision';
        const subtitle = "Helping you in makin'decisions";

        return(
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action optionsPresent = {this.state.options.length>0} handleChooseRandom = {this.handleChooseRandom} />
                <Options options = {this.state.options} handleDeleteAll = {this.handleDeleteAll} />
                <AddOption handleAddNewOption = {this.handleAddNewOption} />
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        // console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{

    render(){
        return (
        <div>
            <button onClick = {this.props.handleChooseRandom} disabled = {!this.props.optionsPresent}>What should I do?</button>
        </div>
        );
    }
}

class Options extends React.Component{
    
    render(){
        console.log();
        return(
            <div>
                {/* Button to remove all options. */}
                <button onClick = {this.props.handleDeleteAll}>Remove all</button>
                
                {
                    //Displays each option, as a separate option.
                    this.props.options.map((option) => <IndividualOption key = {option} optionText = {option}/>)
                }
            </div>        
        );
    }
}

class IndividualOption extends React.Component{
    render(){
        return(
            <div>
                <li > {this.props.optionText}</li>
            </div>
        );
    }
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

        this.setState(()=>{
            return {
                error:errorAfterAddOption
            };
        });
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