import logo from '../logo.svg';
import '../App.css';
import {HomePage} from "./HomePage";
import {Section2Category} from "./Section2Category";
import {Section3Modniky} from "./Section3Modniky"
import Section4Shop from "./Section4Shop";
import Footer from "./Footer";
import SectionFilters from "./SectionFilters";
import PageItems from "./PageItems";


function App() {
  return (
    <>
      <HomePage />
      <Section2Category />
      <SectionFilters />{/*это должно быть пока  */}
      <PageItems />
      <Section3Modniky />
      <Section4Shop />
      <Footer />
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
