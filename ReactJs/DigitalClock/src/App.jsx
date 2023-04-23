import React, { useState } from "react";

const App = () => {
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);
    // function for updating time
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    // updating time in every second (100oms = 1s)
    setInterval(UpdateTime,1000)
    return (
        <>
            <h1> {ctime} </h1>
        </>
    );
};

export default App;