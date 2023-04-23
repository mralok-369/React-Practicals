import React, { useState } from 'react';
import firebase from './database/firebase';
import Feedbacks from './Feedbacks';

function Fdata() {
    let [first, setfirst] = useState("");
    let [middle, setmiddle] = useState("");
    let [last, setlast] = useState("");
    let [feed, setfeed] = useState("");

    const onSubmits = (event) => {
        event.preventDefault();
        // checking if the values are null
        if (first === "" || last === "" || feed === "") {
            alert("please fill all * fields");
        } else {
            // sending data to database
            const formRef = firebase.database().ref("formdata");
            const formData = {
                first,
                middle,
                last,
                feed,
                complete: false,
            };
            formRef.push(formData);
            // clearing inputs and hooks after submit
            setfirst("");
            setmiddle("");
            setlast("");
            setfeed("");
        }
    }

    return (
        <>
            <div className="container">
                <div className="formData">
                    <form onSubmit={onSubmits} style={{ background: "rgb(179, 185, 195)" }}>
                        <br />
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
                </div>
                <Feedbacks />
                {/* <div className="formValue" id="formValue">    
                </div> */}
            </div>
        </>
    )
}

export default Fdata;