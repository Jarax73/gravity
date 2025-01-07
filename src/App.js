/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <IntroSection />
      </header>
    </div>
  );
}

export default App;
