// index.js
import React from 'react';
import reactDom from 'react-dom';
import App from './App';

reactDom.render(
    <>
        <App />
    </>,
    document.getElementById("root")
);


/// app.jsx
import React from 'react';
import Heading from './Heading';
import Para from './Para';
import List from './List';

function App() {
    return (
        <>
            <Heading />
            <Para />
            <List />
        </>
    );
}

export default App;

/// Heading.jsx
import React from 'react';

function Heading(){
    return <h1>My name is Alok</h1>;
}

export default Heading;


///Para.jsx
import React from 'react';

function Para(){
    return <p>This is my World</p>;
}
export default Para;

/// List.jsx
import React from 'react';

function List(){
    return(<ol>
        <li>Alok Kumar</li>
        <li>Vishal Kumar</li>
        <li>Gagan Kumar</li>
        <li>Alex Kumar</li>
        <li>Upendra Kumar</li>
    </ol>);
}

export default List;