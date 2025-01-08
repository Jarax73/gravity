/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import AboutSection from "./components/AboutSection";
import CryptoMarketSection from "./components/CryptoMarketSection";
import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <IntroSection />
      <AboutSection />
      <CryptoMarketSection />
    </div>
  );
}

export default App;
