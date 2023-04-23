import React, { useState } from "react";

const App = () => {

    const [name,setName] = useState();
    const [fullName,setFullName] = useState();

    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const onSubmit = () => {
        setFullName(name);
    }
    return (
        <>
            <div>
                <h1> Hello, {fullName} </h1>
                <input
                    placeholder="Enter Your Name"
                    type="text"
                    onChange={inputEvent}
                    value={name} />
                <button onClick={onSubmit}> SUBMIT </button>
            </div>
        </>
    );
};

export default App;