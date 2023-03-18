import React from "react";
import { ElementContainer, ElementContainerRestraint, ElementNameLabel, ElementNumberBox } from "../styles/elementStyles";

class NumberFields extends React.Component {
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

    /*return (
        <ElementContainerRestraint>
        {Object.entries(values).map(([key, value]).filter(key => value.visible = true) => (
          //MaxToolTip = "The maximum value for " + {key} + "is " + toString({value.max});

          <ElementContainer key={key} data-tip={value.max}>
            <ElementNameLabel htmlFor={key}>{key}</ElementNameLabel>
            <ElementNumberBox
                type="number"
                name={key}
                value={state[key] || value.amount}
                max={value.max}
                onChange={this.handleInputChange}
            ></ElementNumberBox>
          </ElementContainer>
        ))}
        </ElementContainerRestraint>
    );*/
  }
}

export default NumberFields;