import logo from './logo.svg';
import './App.css';
import Header from './components/head';
import { decodeSave, testData, versionCheck } from './main';

//<header className="App-header">
function App() {

  const GameObj = decodeSave(testData);
  const versionSanity = versionCheck(GameObj.version);

  if(!versionSanity)
  {
    //throw a warning
    console.warn("The game version is not the same!");
  }

  return (
    <>
    <div className="App">
      <Header></Header>
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
