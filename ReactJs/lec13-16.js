import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";





<!-- 
 css part of lec 13-16
* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box;
}

.img_div{
    display: flex;
    justify-content: center;
}
.img_div img {
    width: 250px;
    height: 300px;
}
 -->



// lec 13 and 14 and 15 and 16
const name = "Alok kumar";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const web = "https://picsum.photos/";
const heading = {
        color: '#fa9191',
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        textShadow: '0px 2px 4px #ffe9c5',
        margin: '70px 0',
        fontFamily: '"Josefin Sans", sans-serif',
    };

ReactDOM.render(
    <>
    <h1 style={heading}>Hello, My name is {name}</h1>
    <div className="img_div">
        <img src={img1} alt="randomImages" />
        <img src={img2} alt="randomImages" />
        <a href={web} target="_blank">
            <img src={img3} alt="randomImages" />
        </a>
    </div>
    </>,
    document.getElementById("root"));