import logo from './logo.svg';
import './App.css';
import Header from './components/head';
import { decodeSave, testData, testGameDataIntegrity, versionCheck } from './main';
import ErrorBox from './components/errorBox';
import ResourceElements from './components/bodyElements';

//<header className="App-header">
function App() {

  const GameObj = decodeSave(testData);
  const errors = { Error: false, Type: "", Message: "" }

  if(!testGameDataIntegrity(GameObj)) {
    errors.Error = true;
    errors.Type = "warn";
    errors.Message = "Could not verify the structure of the game data.";

    if(!versionCheck(GameObj.version)) {
      errors.Error = true;
      errors.Type = "info";
      errors.Message = "The current version of the game is different from the version this app was made for. It may not load all resources correctly (if a new one was added).";
    }
  }
  
  let gameResources;
  
  if(!errors.Error)
    gameResources = GameObj.resource;

  return (
    <>
    <div className="App">
      <Header></Header>
      <ErrorBox Error={errors.Error} Type={errors.Type} Message={errors.Message} />
      <ResourceElements Resources={gameResources} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
    </>
  );
}
//</header>

export default App;
