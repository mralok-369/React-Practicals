import React, { useState } from 'react';
// import Form from './Form';

function Fdata() {

    let [first, setfirst] = useState("");
    let [middle, setmiddle] = useState("");
    let [last, setlast] = useState("");
    let [feed, setfeed] = useState("");

    const onSubmits = (event) => {
        event.preventDefault();
        CreateFeed();
    }

    //creating new object and adding it to list
    function CreateFeed() {
        if (first === "" || last === "" || feed === "") {
            alert("please fill all * fields");
        } else {
            let formValue = document.getElementById("formValue");
            let comments = document.createElement("div");
            comments.id = "comments";

            comments.innerHTML = first + " " + middle + " " + last + " says, <br />  " + feed;

            // clearing inputs and hooks after submit
            setfirst("");
            setmiddle("");
            setlast("");
            setfeed("");
            formValue.appendChild(comments)
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

                <div className="formValue" id="formValue">
                    {/* <div className="comments" id="comments"> */}
                    {/* <h2> {fullName} </h2>
                        <p> {message} </p> */}
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default Fdata;