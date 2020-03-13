import React from 'react';
import Navbar from "../components/Navbar.jsx"
const Default = (props) => {
    return (
        <div className="container">
            <Navbar />
            {props.children}
        </div>
        
    );
}

export default Default;

