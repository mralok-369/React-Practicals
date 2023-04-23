import React, { useState } from 'react';

function Form() {
    let [first, setfirst] = useState("");
    let [middle, setmiddle] = useState("");
    let [last, setlast] = useState("");
    let [feed, setfeed] = useState("");

    const onSubmits = (event) => {
        event.preventDefault();
        console.log(first);
    }
    return (
        <form onSubmit={onSubmits}>
            <label>First Name* : <br />
                <input
                    type="text"
                    value={first}
                    className="input"
                    onChange={(e) => setfirst(e.target.value)}
                />
            </label><br />

            <label>Middle Name : <br />
                <input
                    type="text"
                    value={middle}
                    className="input"
                    placeholder="  optional"
                    onChange={(e) => setmiddle(e.target.value)}
                />
            </label><br />

            <label>Last Name* : <br />
                <input
                    type="text"
                    value={last}
                    className="input"
                    onChange={(e) => setlast(e.target.value)}
                />
            </label><br />

            <label>Suggestions* : <br />
                <textarea
                    rows="5"
                    cols="25"
                    name="feedback"
                    value={feed}
                    placeholder="Enter your feedback here..."
                    className="sugg"
                    onChange={(e) => setfeed(e.target.value)}
                />
            </label><br />

            <label>
                <input type="submit" className="btn" />
                <input type="reset" value="Reset" className="btn" />
            </label>
        </form>
    )
}

export default Form;