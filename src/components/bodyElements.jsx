import React from "react";
import { ElementContainer, ElementContainerRestraint, ElementNameLabel, ElementNumberBox } from "../styles/elementStyles";
//I picture you in the sun, wondering what went wrong.

const onNumberBoxUpdate = (event) => {
    //this.setState({name: value});
    const { id, value, max } = event.target;
    const valueSanity = (parseInt(value) > parseInt(max) ? parseInt(max) : parseInt(value));
    //const valueSanity = (value <= max ? value : max);
    //const valueSanity = (value > max ? max : value);

    console.log(`id ${id} - value ${value} - max ${max} - vs ${valueSanity}`);
    this.setState({
        value: valueSanity
    });
};

const ResourceElements = (props) => {
    const resources = props.Resources;
    let resourceBody = [];

    for (const [k, v] of Object.entries(resources)) {
        if(v.display === true && typeof k === "string" && typeof v.amount === "number" && typeof v.max === "number") {
            const maxValueTip = `Maximum value for ${k} is ${v.max}`;
            resourceBody.push(<ElementContainer data-tip={maxValueTip}><ElementNameLabel htmlFor={k}>{k}:</ElementNameLabel> <ElementNumberBox type="number" value={v.amount} max={v.max}  id={k} name={k} onChange={onNumberBoxUpdate}></ElementNumberBox></ElementContainer>);
        }
    }
    return (
        <ElementContainerRestraint>
            {resourceBody}
        </ElementContainerRestraint>
    );
};



export default ResourceElements;