import React, { useState } from "react";
import { ElementContainer, ElementContainerRestraint, ElementNameLabel, ElementNumberBox } from "../styles/elementStyles";
//I picture you in the sun, wondering what went wrong.



/*const onNumberBoxUpdate = (event) => {
    const { id, value, max } = event.target;
    const valueSanity = (parseInt(value) > parseInt(max) ? parseInt(max) : parseInt(value)); //I kept telling ChatGPT that 69 < 200 and it was finally like "Hmm, JS likes to interpert numbers as strings even if they are numbers try this or some shit - George Washington"

    console.log(`id ${id} - value ${value} - max ${max} - vs ${valueSanity}`);
    this.setState({
        value: valueSanity
    });
};*/

const ResourceElements = (props) => {
    const resources = props.Resources;
    let resourceBody = [];
    const [value, setValue] = useState(0);

    const onNumberBoxUpdate = (event) => {
        const { id, max } = event.target;
        let currentMax = parseInt(max);
        const valueSanity = (parseInt(value) > parseInt(max) ? parseInt(max) : parseInt(value)); //I kept telling ChatGPT that 69 < 200 and it was finally like "Hmm, JS likes to interpert numbers as strings even if they are numbers try this or some shit - George Washington"
        console.log(`id ${id} - value ${value} - max ${max} - vs ${valueSanity}`);

        if(value+1 <= currentMax)
            setValue(value + 1);
    };

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

const Achievements = { //testing achievements to see what does what, in case someone wants the old Holiday achievements.
    "gift": {},
    "egg": {
        "2022": {
            "egg1": true,
            "egg2": false,
            "egg3": false,
            "egg4": false,
            "egg5": false,
            "egg6": false,
            "egg7": false,
            "egg8": false,
            "egg9": false,
            "egg10": false,
            "egg11": false,
            "egg12": false,
            "egg13": false,
            "egg14": false,
            "egg15": false
        },
        "2023": {
            "egg1": false,
            "egg2": false,
            "egg3": false,
            "egg4": false,
            "egg5": false,
            "egg6": false,
            "egg7": false,
            "egg8": false,
            "egg9": false,
            "egg10": false,
            "egg11": false,
            "egg12": false,
            "egg13": false,
            "egg14": false,
            "egg15": false
        }
    },
    "trick": {
        "2022": {
            "trick1": false,
            "trick2": false,
            "trick3": false,
            "trick4": false,
            "trick5": false,
            "trick6": false,
            "trick7": false,
            "treat1": false,
            "treat2": false,
            "treat3": false,
            "treat4": false,
            "treat5": false,
            "treat6": false,
            "treat7": false
        },
        "2023": {
            "trick1": false,
            "trick2": false,
            "trick3": false,
            "trick4": false,
            "trick5": false,
            "trick6": false,
            "trick7": false,
            "treat1": false,
            "treat2": false,
            "treat3": false,
            "treat4": false,
            "treat5": false,
            "treat6": false,
            "treat7": false
        },
        "trick1": false,
        "trick2": false,
        "trick3": false,
        "trick4": false,
        "trick5": false,
        "trick6": false,
        "trick7": false,
        "trick8": false,
        "trick9": false,
        "trick10": false,
        "trick11": false,
        "trick12": false
    }
};



export default ResourceElements;