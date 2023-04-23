import React, { useState } from "react";

const App = () => {

    const [name, setName] = useState();
    const [fullName, setFullName] = useState();
    const [lastName, setLastName] = useState('');
    const [lastNameNew, setLastNameNew] = useState();


    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(name);
        setLastNameNew(lastName)
    }

    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    } 


    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1> Hello, {fullName} {lastNameNew} </h1>
                        <input
                            placeholder="Enter Your Name"
                            type="text"
                            onChange={inputEvent}
                            value={name}
                        />
                        <br />
                        <input
                            placeholder="Enter Your Last Name"
                            type="text"
                            onChange={inputEventTwo}
                            value={lastName}
                        />
                        <button type="submit"> SUBMIT </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App;