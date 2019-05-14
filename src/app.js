console.log("It's runnning");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer', 
    options: ['One', 'Two']
}

let count = 0
const addOne = () => {
    count ++;
    renderCounterApp();
};

const minusOne = () => {
    count --;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

console.log(templateTwo)
const appRoot = document.getElementById('app');
 
ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>

    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();