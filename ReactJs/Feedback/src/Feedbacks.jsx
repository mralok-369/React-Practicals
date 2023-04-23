import React, { useEffect, useState } from 'react';
import firebase from "./database/firebase";

export default function Feedbacks() {
    const [commentList, setCommentlist] = useState();

    useEffect(() => {
        const formRef = firebase.database().ref("formdata");
        formRef.on("value", (snapshot) => {
            // console.log(snapshot.val());
            const comments = snapshot.val();
            const commentList = [];
            for (let id in comments) {
                commentList.push({ id, ...comments[id] });
            }
            console.log(commentList);
            setCommentlist(commentList);  // array of objects
        })
    }, []);
    const deleteComment = () => {
        const formRef = firebase.database().ref("formdata");
        formRef.remove();
    }
    const updateComment = () => {

    }
    return (
        <div className="formValue">
            {/* <h3>Our Top Suggestions</h3> */}
            {commentList ? commentList.map((cvalue,index) => <div id="comments" key={index}>
                <h2>{cvalue.first} {cvalue.middle} {cvalue.last}, </h2>
                says <br />
                <h3>{cvalue.feed}</h3>
                {/* <button onClick={deleteComment}>delete</button>
                <button onClick={updateComment}>complete</button> */}
            </div>) : ''}
            <button onClick={deleteComment} className="del_all" >DeleteAll</button>
        </div>
    );
}
