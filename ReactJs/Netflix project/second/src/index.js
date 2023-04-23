import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Card from './Card';
import Sdata from './Sdata';
import './index.css';

// Props in react Project Netflix App
ReactDOM.render(
    <>
        <Header />

        {Sdata.map((val) => {
            return (
                <Card
                    imgsrc={val.imgsrc}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />
            );
        })}

    </>,
    document.getElementById('root')
);

// Fat arrow function
// const myname = (a, b) => a + b;

// simple function for returning value of sdata
// function ncard(val) {
//     console.log(val);
//     return (
//         <Card
//             imgsrc={val.imgsrc}
//             title={val.title}
//             sname={val.sname}
//             link={val.link}
//         />
//     );
// }