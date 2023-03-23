import { React, useState } from "react";
import { ElementContainer, ElementContainerRestraint, ElementNameLabel, ElementNumberBox } from "../styles/elementStyles";

export default function GenerateNumberFields({ GameObject }) {
  const [ModifyGameValues, updateSave] = useState(GameObject);

    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      const ModifiedValueObj = ModifyGameValues;
      //test
      console.log(`The value for ${name} is ${value} | Old value ${ModifiedValueObj[name].amount}`);
      ModifiedValueObj[name] = value;
      updateSave(ModifiedValueObj)
    }

    let elementBody = [];
    for(const [k, v] of Object.entries(ModifyGameValues)) {
      if(v.display === true && typeof k === "string" && typeof v.amount === "number" && typeof v.max === "number") {
        const maxValueTip = `Maximum value for ${k} is ${v.max}`;
        elementBody.push(<ElementContainer data-tip={maxValueTip}><ElementNameLabel htmlFor={k}>{k}:</ElementNameLabel>
        <ElementNumberBox
        type="number"
        value={v.amount}//{state[k] || v.amount}
        max={v.max} 
        id={k}
        name={k}
        onChange={handleInputChange}
        ></ElementNumberBox></ElementContainer>);
      }
    }

    return (
      <ElementContainerRestraint>
        {elementBody}
      </ElementContainerRestraint>
    );
}

/*class NumberFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // Bind event handlers to the class instance
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    // Set initial state based on props
    const { values } = this.props;
    let state = {};

    for (const [key, value] of Object.entries(values)) {
      state[key] = value.amount;
    }

    this.setState(state);
  }

  handleInputChange(event) {
    const { name, value, max } = event.target;
    console.log(`name: ${name}, value: ${value}, max: ${max}`);
    const newValue = Math.min(max, Math.max(0, value));
    this.setState({ [name]: newValue });
  }

  render() {
    const { values } = this.props;
    const { ...state } = this.state;

    let elementBody = [];
    //elementBody.push(<ElementContainerRestraint />);
    for(const [k, v] of Object.entries(values)) {
      if(v.display === true && typeof k === "string" && typeof v.amount === "number" && typeof v.max === "number") {
        const maxValueTip = `Maximum value for ${k} is ${v.max}`;
        elementBody.push(<ElementContainer data-tip={maxValueTip}><ElementNameLabel htmlFor={k}>{k}:</ElementNameLabel>
        <ElementNumberBox
        type="number"
        value={state[k] || v.amount}
        max={v.max} 
        id={k}
        name={k}
        onChange={this.handleInputChange}
        ></ElementNumberBox></ElementContainer>);
      }
    }

    return <ElementContainerRestraint>{elementBody}</ElementContainerRestraint>;
  }
}*/

//export default NumberFields;