// index.js
import React from "react";
import ReactDOM from "react-dom";
import myfav, {favprog,myName,myNames} from "./App";
// import * as ques from "./App";
// ES6 Modules Import Export 

ReactDOM.render(
    <>
        {/* <ol>
            <li>Thapa</li>
            <li>{ ques.default}</li>
            <li>{ ques.favprog}</li>
            <li>{ ques.myName()}</li>
            <li>{ ques.myNames()}</li>
        </ol> */}
        <ol>
            <li>Thapa</li>
            <li>{myfav}</li>
            <li>{favprog}</li>
            <li>{myName()}</li>
            <li>{myNames()}</li>
        </ol>
    </>, document.getElementById("root")
);

/// App.jsx
const youtuber = "thapa techinical";
const favprog = "React js";

function myName(){
    let name = "Alok";
    return name;
}

function myNames(){
    let names = "Alok Kumar";
    return names;
}

export default youtuber;
export {favprog, myName,myNames};  // if we passing another object then we use it in {}



