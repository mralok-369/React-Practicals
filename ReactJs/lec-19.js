// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

// lec 17 challenge 3
ReactDOM.render(<App />, document.getElementById("root"));

// App.jsx
import React from 'react';

function App() {
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = '';
    const cssStyle = {};

    if (curDate >= 1 && curDate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    } else if (curDate >= 12 && curDate < 19) {
        greeting = 'Good Afternoon';
        cssStyle.color = 'orange';
    } else {
        greeting = 'Good Night';
        cssStyle.color = 'black';
    }

    return (
        <>
            <div>
                <h1>Hello Alok, <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    )
}

export default App;

// index.css
body {
    background-color: #b4f2e1;
    box-sizing: border-box;
    margin: 0;
    padding: 0%;
    font-family: "josefin sans", sans-serif;
}

div {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
}

h1 {
    padding: 20px 20px;
    background-color: #ffe9c5;
    color: #fa9191;
    border-radius: 20px;
}

span {
    color: #eb6383;
}