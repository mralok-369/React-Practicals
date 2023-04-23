// challange : 5 Create Simple Calculator App 
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// challange #5 - Create simple calculator App in react
ReactDOM.render( <App />, document.getElementById('root'));

// App.jsx
import React from 'react';
import {add,sub,div,mult} from './Calc';

function App(){
    return (
        <ul>
            <li>Sum of two no is {add(40, 3)}</li>
            <li>Sub of two no is {sub(30, 3)}</li>
            <li>Div of two no is {div(10, 3)}</li>
            <li>Mult of two no is {mult(10, 3)}</li>
        </ul>
    );
}

export default App;

/// Calc.jsx
// function for add two Number
function add(a, b) {
    return a + b;
}

// function for substract two Number
function sub(a, b) {
    return a - b;
}

// function for division of two Number
function div(a, b) {
    let div = a/b;
    div = div.toFixed(2);
    return div;
}

// function for multiplication of two Number
function mult(a, b) {
    return a * b;
}

