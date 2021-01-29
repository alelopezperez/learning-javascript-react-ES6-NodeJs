// Import react and reactDom
import React from 'react';
import ReactDOM from 'react-dom'
//this is resolved with webpack

// Create react components

const getButtonTexti = () =>{
    console.log("a");
    return "Cliiiiick oooon mee";

}
const App = () =>{
    const csObj = {
        backgroundColor : 'blue',
        color : "white"
    }

    const buttonText = ["WOw","it's connected", 12];
    const anotherButton = {text: "click me"};
    return ( 
        <div>
            <label className="label" htmlFor="name"> Enter Name </label>
            <input id="name"/>
            <button style={csObj} onClick={getButtonTexti}>{anotherButton.text}</button> 
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
//show the created react component
