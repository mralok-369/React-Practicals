import React, { useState } from "react";

const App = () => {
    const state = useState();

    const [count,setCount] = useState(0);

    const IncNum = () => {
        console.log(state);
        setCount(count+1);
        // console.log("clicked" + count++);
    };
    return (
        <>
            <h1> {count} </h1>
            <button onClick={IncNum}> Click Me </button>
        </>
    );
};

export default App;