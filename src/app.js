console.log("It's runnning");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer', 
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }

};

const removeAll = () => {
    app.options = [];
    render()
}


const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000]


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : ' No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {
                    app.options.map((object) => <li key ={object}>Item: {object}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
              <input type="text" name="option"/>
              <button>Add Option</button>  
            </form>
        </div>
    );    
    ReactDOM.render(template, appRoot);
};

render();