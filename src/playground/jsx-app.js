console.log('App is running.');

//Template to be rendered
const app = {
    title:'Indecision',
    subTitle:'Helping you in decisions.',
    options : []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    //e is the event.    //target is the form.    //elements is all the elements in the form.    //option is the name of the element.    //value is the value of the element.
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.option.value = "";
        renderTemplateOptionsCount();
    }
    console.log(app.options);
}
const onRemove = () => {
    app.options=[];
    // console.log(app.options);
    renderTemplateOptionsCount();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*(app.options.length));
    const option = app.options[randomNum];
    alert(option);
};



const appRoot = document.getElementById('app');

const renderTemplateOptionsCount = () => {
    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length>0?  'Here are your options.':'No options available'}</p>

        <button disabled = {app.options.length === 0} onClick = {onMakeDecision}>What should I do?</button>
        <button onClick = {onRemove}>Remove All</button>
        
        <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
        <form onSubmit = {onFormSubmit}>
            <input type = "text" id = "option" />
            <button>Add Option</button>
        </form>

    </div>
    );
    ReactDOM.render(template, appRoot);
}

renderTemplateOptionsCount();