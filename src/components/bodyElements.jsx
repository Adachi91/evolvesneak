import React from "react";
import { ElementContainer, MaxValueSpan } from "../styles/elementStyles";
//I picture you in the sun, wondering what went wrong.
/*UIElements = {
    Labels: {
        0: "Apple",
        1: "Bananas"
    },
    Checkboxs: {
        0: {

        }
    },
    Textfields: {

    },
};*/


/*const GameObj = {
    Lumber: {
        "Max": 1234,
        "Amount": 123
    },
    Stone: {
        "Max": 1234,
        "Amount": 69
    }
};*/

//function RunTrainOnGameObjs(props) {
const ResourceElements = (props) => {
    return (
        <>
            {Object.keys(props).map((key) => {
                if(props[key].Visible) {
                    <ElementContainer>
                        <label htmlFor={props[key].Name}>{props[key].Name}</label>
                        <input type="text" id={props[key].Name} value={props[key].Amount}></input><MaxValueSpan>/{props[key].Max}</MaxValueSpan>
                    </ElementContainer>
                }
            })};
        </>
    );
};

export default ResourceElements;




