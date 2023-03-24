import React, { useState } from 'react';
import { decodeSave, testGameDataIntegrity, versionCheck } from '../main';
import { UserTextArea } from '../styles/elementStyles';
import GenerateNumberFields from './chatGPTNumberFields';
import ErrorBox from './errorBox';


/*function errorReducer(state, action) {
    if(action.type === 'add') {
        console.log(action.payload);
        return {
            ...state,
                ...action.payload
        };
    }

    throw Error('Unknown Action');
}*/

/* basically all of user state will be in here, I think. I dunno yet */
export default function UserSaveDataElement({errState, errorHandler}) {
    //just having a bit of fun trying to figure out why they didn't make a more intiutive accessor
    /*const Person [get, set];
    const [get, set] = useState("Person A");
    const [get, set] = useState("Person B");*/

    const [value, valueSetter] = useState('');
    //const [errors, errorsSetter] = useState( {} );
    //const [errors, dispatchError] = useReducer(errorReducer, {});
    const [GameObj, gameSetter] = useState({});
    const [GameLoaded, gameLoadedSetter] = useState(false);

    const [hasException, sethasException] = useState(false);

    const gameProccessedCB = () => {
        console.log(GameObj);
       // return (<GenerateNumberFields GameObject={GameObj} />);
    }

    const onUserInput = (event) => {
        const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/; //STACKOVERFLOW TOLD ME TO DO IT
        const saveData = event.clipboardData.getData('text/plain');
        let errored = false;
        sethasException(false);
        gameLoadedSetter(false);
        gameSetter({});

        console.log("Attempting onChangePastewhateevr");
        if(saveData.length > 6969 && base64regex.test(saveData)) { //this is a falsy statement if the string is at least 18,000 chars - how fix?
            //Decode, Testvalidity, Push to localstorage SIMPLE RIGHT?

            //bastardized go - err, success = func()/method
            const decompressedSave = decodeSave(saveData);
                if(!decompressedSave.success)
                //{  errorsSetter(...errors, { DecompressSaveException: { type:'warn', msg: decompressedSave.err } }); sethasException(true); return; }
                    {  errorHandler({type: 'add', payload: { DecompressSaveException: { type:'warn', msg: decompressedSave.err}}}); errored = true; sethasException(true); console.warn("decompress"); }
                const _DataCheck = testGameDataIntegrity(decompressedSave.game);
                if(!_DataCheck.success)
                    //{ errorsSetter(...errors, { DataInterigityException: { type:'warn', msg: _DataCheck.err } } ); sethasException(true); return; }
                    { errorHandler({type: 'add', payload: { DataInterigityException: { type:'warn', msg: _DataCheck.err }}}); errored = true; sethasException(true); console.warn("combustion"); }
            const _versionCheck = versionCheck(decompressedSave.game.version);
                if(!_versionCheck.success) 
                    //{ errorsSetter(...errors, VersionMismatchException: { type:'info', msg: _versionCheck.err } ); } //ur a dumbass this doesn't work fix it now you dumbass fucking piece of shit
                    { errorHandler({ type: 'add', payload: {VersionMismatchException: { type:'info', msg: _versionCheck.err }} }); console.warn("exhaust - mardock scramble"); }

            if(errored === false) {
                valueSetter(saveData, updateLocalStorage); //set Value state then callback to update local storage since it rely on Value state
                gameSetter(decompressedSave.game, gameProccessedCB);
                gameLoadedSetter(true);
            }
        } else {
            valueSetter('');
            //errorsSetter( { Error: true, Type: 'warn', Message: `Input was not a valid save file! len: ${saveData.length} && b64.test == ${base64regex.test(saveData)} --------------------------- data seen: ${saveData}` } );
            //errorsSetter(...errors, { NotBase64Exception: { type:'warn', msg: `Input was not a valid save file! len: ${saveData.length} && b64.test == ${base64regex.test(saveData)} --------------------------- data seen: ${saveData}` } } );
            errorHandler({ type: 'add', payload: { NotBase64Exception: { type:'warn', msg: `Input was not a valid save file! len: ${saveData.length} && b64.test == ${base64regex.test(saveData)} --------------------------- data seen: ${saveData}` }}});
            sethasException(true);
        }
      }

      /**
       * Updates the localStorage on the users browser to create up to 10 backups of game data with timestamps so if something goes wrong they can recover their older game saves.
       */
      const updateLocalStorage = () => {
        console.warn("I was called, the end of days is upon us. Every persons for themselves and cats, because cats are cool.");
        const localStorageEntries = Object.entries(localStorage);
        if(localStorageEntries.length >= 10) {
            let oldestTime = Infinity;
            let oldestKey = null;
            for(const [k] of localStorageEntries) {
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
      //Might need to combine components
    return (
        <>
        <ErrorBox errState={errState} />
        {GameLoaded && <GenerateNumberFields GameObject={GameObj} errorHandler={errorHandler} />}
        <div>
        <UserTextArea 
            onPaste={onUserInput}
            value={value}
            onChange={e => valueSetter(e.target.value)}
            placeholder="Paste game save here"
        />
        </div>
        </>
    );
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