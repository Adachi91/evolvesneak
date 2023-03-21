import React from 'react';

class usrSaveTextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', errors: { Error: false, Type: '', Message: '' } }; //is this proper? throw spaghetti at the wall, if it sticks, well ya
  }


  onUserInput = (event) => {
    const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/; //STACKOVERFLOW TOLD ME TO DO IT
    const saveData = event.clipboardData.getData('text/plain');

    if(base64regex.test(saveData)) {
        this.setState({ value: saveData });
        this.updateLocalStorage(); //update the localstorage for recovery if something goes wrong!
        this.props.decodeSave(saveData);
        //then do some other shit like eh try and figure out how to render elements while page is loaded, I haven't tried that yet I suppose
    } else {
        this.setState({ value: '', errors: { Error: true, Type: 'Warn', Message: 'Input was not a valid save file!' } });
    }
  }

  updateLocalStorage = () => {
    //i dunno
    /*const a = localStorage.length;
    if(a > 10) {
        //change first backup
        const oldestValue = [];
        for(const [k, v] of Object.entries(localStorage)) {
            const time = k.split("k");
            if(oldestValue.length === 0) {
                const newValue = {};
                newValue[k] = v;
                oldestValue.push(newValue);
            } else {
                const firstEntry = oldestValue[0];
                const firstEntryTime = Date.parse(Object.keys(firstEntry)[0].split("k")[1]);
                const currentEntryTime = Date.parse(time);


                if(firstEntryTime > currentEntryTime) {
                    const newValue = {};
                    newValue[k] = v;
                    oldestValue.pop();
                    oldestValue.push(newValue);
                }
            }
        }

        localStorage.removeItem(Object.keys(oldestValue[0])[0]);
        localStorage.setItem('saveBak'+Date.now(), this.state.value);
    } else {
        localStorage.setItem('saveBak'+Date.now(), this.state.value);
    }*/
    const localStorageEntries = Object.entries(localStorage);
    if(localStorageEntries.length >= 10) {
        let oldestTime = Infinity;
        let oldestKey = null;
        for(const [k, v] of localStorageEntries) {
            const time = Date.parse(k.split("k")[1]);

            if(time < oldestTime) {
                oldestTime = time;
                oldestKey = k;
            }
        }
        localStorage.removeItem(oldestKey);
    }
    localStorage.setItem('saveBak'+Date.now(), this.state.value);
  }

  //TODO: style <textarea> in elementStyles.js
  render() {
    return (
    <>
      <ErrorBox Error={this.state.errors.Error} Type={this.state.errors.Type} Message={this.state.errors.Message} />
      <textarea 
        onPaste={this.onUserInput}
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
      />
    </>
    );
  }
}

export default usrSaveTextArea;