import logo from '../logo.svg';
import '../App.css';
import {HomePage} from "./HomePage";
import {Section2Category} from "./Section2Category";
import {Section3Modniky} from "./Section3Modniky"

function App() {
  return (
    <>
      <HomePage />
      <Section2Category />
      <Section3Modniky />
    {/*<div className="App">
      <header className="App-header">
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
      </header>
    </div>*/}
      </>
  );
}

export default App;
