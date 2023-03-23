import React, { useState } from 'react';
import { decodeSave, encodeSave, testGameDataIntegrity, versionCheck, versionCheck } from '../main';
import { ElementContainerRestraint, UserTextArea } from '../styles/elementStyles';
import ErrorBox from './errorBox';

/* basically all of user state will be in here, I think. I dunno yet */
export default function UserSaveDataElement() {
    //just having a bit of fun trying to figure out why they didn't make a more intiutive accessor
    /*const Person [get, set];
    const [get, set] = useState("Person A");
    const [get, set] = useState("Person B");*/

    const [value, valueSetter] = useState({});
    const [errors, errorsSetter] = useState( { Error: false, Type: '', Message: ''} );
    const [GameObj, gameSetter] = useState({});

    const onUserInput = (event) => {
        const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/; //STACKOVERFLOW TOLD ME TO DO IT
        const saveData = event.clipboardData.getData('text/plain');
    
        console.log(value);
        console.log("====================================== BREAK =============================================");
        console.log(saveData);
        if(saveData.length > 6969 && base64regex.test(saveData)) {
            //Decode, Testvalidity, Push to localstorage SIMPLE RIGHT?
            const decodedData = decodeSave(saveData);
            const DataCheck = testGameDataIntegrity(decodedData);
            const _versionCheck = versionCheck(decodedData[version]);

            if(!DataCheck) {
                errorsSetter({Error: true, Type: 'warn', Message: 'Could not verify game data'});
            }
            if(!_versionCheck) {
                errorsSetter({Error: true, Type:'info', Message: 'Game data is a newer version than the current app, it might be missing any new features until updated'});
            }

            if(errors.Type === 'warn') {
                //handle critical.
                console.warn("Critical was detected");
                return;
            }

            valueSetter(saveData);
            gameSetter(decodedData);
            
            //this.setState({ value: saveData });
            valueSetter(saveData);
            updateLocalStorage(); //update the localstorage for recovery if something goes wrong!
            //this.props.decodeSave(saveData);
            //testing
            decodeSave(value);
            <decodeSave value={value} />

            //then do some other shit like eh try and figure out how to render elements while page is loaded, I haven't tried that yet I suppose
        } else {
            //might need this?
            //const erorrosr = {};

            valueSetter('');
            errorsSetter( { Error: true, Type: 'warn', Message: 'Input was not a valid save file!' } );
            //this.setState({ value: '', errors: { Error: true, Type: 'warn', Message: 'Input was not a valid save file!' } });
        }
      }

      /**
       * Updates the localStorage on the users browser to create up to 10 backups of game data with timestamps so if something goes wrong they can recover their older game saves.
       */
      const updateLocalStorage = () => {
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
        localStorage.setItem('saveBak'+Date.now(), value);
      }


      //TODO: Duplication, if you double paste it will bypass b64 encoding check and allow the text in the field, also small strings like  "asdf" are valid b64 strings need to fix this as well.
    return (
    <ElementContainerRestraint>
    <ErrorBox Error={errors.Error} Type={errors.Type} Message={errors.Message} />
    <UserTextArea 
        onPaste={onUserInput}
        value={value}
        onChange={e => valueSetter(e.target.value)}
        placeholder="Paste game save here"
    />
    </ElementContainerRestraint>
    );
    // this.setState({ value: e.target.value })}
}

/*class usrSaveTextArea extends React.Component {
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
        this.setState({ value: '', errors: { Error: true, Type: 'warn', Message: 'Input was not a valid save file!' } });
    }
  }

  updateLocalStorage = () => {*/
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
    
    
    /*const localStorageEntries = Object.entries(localStorage);
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

//export default usrSaveTextArea;*/