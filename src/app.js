class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['1','2','3','4','5']
        };
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options: []
            };
        });
    }

    handlePick(){
        const randomNum = Math.floor(Math.random()*(this.state.options.length));
        const option = this.state.options[randomNum];
        alert(option);
    }

    render(){
        const title = 'Indecision';
        const subtitle = "Helping you in makin'decisions";

        return(
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action optionsPresent = {this.state.options.length>0} handlePick = {this.handlePick} />
                <Options options = {this.state.options} handleDeleteOptions = {this.handleDeleteOptions} />
                <AddOption />
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
            <button onClick = {this.props.handlePick} disabled = {!this.props.optionsPresent}>What should I do?</button>
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
                <button onClick = {this.props.handleDeleteOptions}>Remove all</button>
                
                {
                    //Displays each option, as a separate option.
                    this.props.options.map((option) => <Option key = {option} optionText = {option}/>)
                }
            </div>        
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                <li > {this.props.optionText}</li>
            </div>
        );
    }
}

class AddOption extends React.Component{
    handleNewOption(e){
        e.preventDefault();
        const option = e.target.elements.newOption.value.trim();
        if(option){
            alert(option)
        }

        
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.handleNewOption}>
                    <input type='text' placeholder = 'What should I do hmm.?' id = 'newOption'></input>
                    <button>What to do.</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));