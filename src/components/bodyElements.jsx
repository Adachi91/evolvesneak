import React from "react";
import { ElementContainer, ElementContainerRestraint, ElementNameLabel, ElementNumberBox, MaxValueSpan } from "../styles/elementStyles";
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
    const resources = props.Resources;
    let resourceBody = [];

    for (const [k, v] of Object.entries(resources)) {
        if(v.display === true && typeof k === "string" && typeof v.amount === "number" && typeof v.max === "number") {
            resourceBody.push(<ElementContainer><ElementNameLabel htmlFor={k}>{k}</ElementNameLabel> <ElementNumberBox value={v.amount} id={k}></ElementNumberBox><MaxValueSpan>/{v.max}</MaxValueSpan></ElementContainer>);
        }
    }
    return (
        <ElementContainerRestraint>
            {resourceBody}
        </ElementContainerRestraint>
    );

    /*return (
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
    );*/
};



export default ResourceElements;




