class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = "Helping you in makin'decisions";
        const options = ['1','2','3','4'];

        return(
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action />
                <Options options = {options}/>
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
    handleChoose(){
        
    }
    render(){
        return (
        <div>
            <button onClick = {this.handleChoose}>What should I do?</button>
        </div>
        );
    }
}

class Options extends React.Component{
    removeAll(){
        alert('remove all');
    }
    render(){
        console.log();
        return(
            <div>
                <button onClick = {this.removeAll}>Remove all</button>
                {
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