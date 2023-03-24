import { React, useEffect, useState } from "react";
import { ElementContainer, ElementNameLabel, ElementNumberBox } from "../styles/elementStyles";

export default function GenerateNumberFields({ GameObject, errorHandler }) {
  const [ModifyGameValues, updateSave] = useState(GameObject);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const ModifiedValueObj = ModifyGameValues;
    //test
    console.log(`The value for ${name} is ${value} | Old value ${ModifiedValueObj.resource[name].amount}`);
    ModifiedValueObj.resource[name].amount = value;
    updateSave(ModifiedValueObj);
  }

  /*useEffect(() => {
    console.log('tried to render numberfields');
    const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      const ModifiedValueObj = ModifyGameValues;
      //test
      console.log(`The value for ${name} is ${value} | Old value ${ModifiedValueObj.resource[name].amount}`);
      ModifiedValueObj.resource[name].amount = value;
      updateSave(ModifiedValueObj);
    }
    let elementBody = [];

    if(ModifyGameValues.length <= 0) {
      errorHandler({ type: 'add', payload: {NumericFieldGeneratorException: { type:'warn', msg: 'Save data is empty' }} });
      console.warn(`[NF] EMPTY DATA`);
      return null;
    }
    let i = 0;
    let j = 0;
    for(const [k, v] of Object.entries(ModifyGameValues.resource)) {
      i++;
      //console.log(`[NF] K: ${k} - V: ${v}`);
      if(v.display === true && typeof k === "string" && typeof v.amount === "number" && typeof v.max === "number") {
        j++;
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
    console.log(`[NF] I iterated over ${i} rows and ${j} met the conditional to be rendered.`);
    return ( elementBody );

  }, [ModifyGameValues, errorHandler]);*/


    //const renderCallBack = () => {
    ////const renderCallBack = useCallback(() => {
    let elementBody = [];
    let i = 0;
    let j = 0;
    if(ModifyGameValues.length <= 0) {
      errorHandler({ type: 'add', payload: {NumericFieldGeneratorException: { type:'warn', msg: 'Save data is empty' }} });
      return (null);
    }

    for(const [k, v] of Object.entries(ModifyGameValues.resource)) {
      i++;
      if(v.display === true && typeof k === "string" && typeof v.amount === "number" && typeof v.max === "number") {
        j++;
        const maxValueTip = `Maximum value for ${k} is ${v.max}`;
        elementBody.push(<ElementContainer data-tip={maxValueTip}><ElementNameLabel htmlFor={k}>{k}:</ElementNameLabel>
        <ElementNumberBox
        type="number"
        value={ModifyGameValues.resource[k].amount || v.amount}//{state[k] || v.amount}
        max={v.max} 
        id={k}
        name={k}
        onChange={handleInputChange}
        ></ElementNumberBox></ElementContainer>);
      }
    }

    console.log(`[NF] I iterated over ${i} rows and ${j} met the conditional to be rendered.`);

    return ( elementBody );
  //}, [ModifyGameValues, errorHandler]);

  //useEffect(() => {
  //  renderCallBack();
  //}, [renderCallBack]);

  //return renderCallBack();

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