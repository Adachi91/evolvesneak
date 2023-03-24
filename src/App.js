//import logo from './logo.svg';
import { useReducer } from 'react';
import './App.css';
import Header from './components/head';
//import { decodeSave, testData, testGameDataIntegrity, versionCheck } from './main';
//import ErrorBox from './components/errorBox';
//import ResourceElements from './components/bodyElements';
//import GenerateElements from './components/bodyElements';
//import NumberFields from './components/chatGPTNumberFields';
import UserSaveDataElement from './components/userInput';

export function dispatchErrors(state, action) {
  if(action.type === 'add') {
      console.log(action.payload);
      return {
          ...state,
              ...action.payload
      };
  }

  throw Error('Unknown Action');
}

function App() {
const [errors, dispatchError] = useReducer(dispatchErrors, {});
  /*const GameObj = decodeSave(testData);
  const errors = { Error: false, Type: "", Message: "" }

  if(!testGameDataIntegrity(GameObj)) {
    errors.Error = true;
    errors.Type = "warn";
    errors.Message = "Could not verify the structure of the game data.";
    //Fix me you idiot, BAKA
    if(!versionCheck(GameObj.version)) {
      errors.Error = true;
      errors.Type = "info";
      errors.Message = "The current version of the game is different from the version this app was made for. It may not load all resources correctly (if a new one was added).";
    }
  }
  
  let gameResources;
  
  if(!errors.Error)
    gameResources = GameObj.resource;*/

  /*const NumberGames = (obj) => {
    return <NumberFields values={obj} />;
  };*/
  
  //<usrSaveTextArea decodeSave={decodeSave} />
  //<ErrorBox Error={errors.Error} Type={errors.Type} Message={errors.Message} />
  // I would like this to be statically placed under header, figure out how to do global states of errors n stuffsz thx bye
  return (
    <>
    <div className="App">
      <Header></Header>
      <UserSaveDataElement />
    </div>
    </>
  );
  //<NumberFields values={gameResources} />
  //<ResourceElements Resources={gameResources} />
}

export default App;
