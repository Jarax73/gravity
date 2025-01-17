/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import CryptoMarketSection from "./components/CryptoMarketSection";
import Footer from "./components/Footer";
import GravityTeam from "./components/GravityTeam";
import IntroSection from "./components/IntroSection";
import NavBar from "./components/NavBar";
import Partners from "./components/Partners";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <IntroSection />
      <AboutSection />
      <CryptoMarketSection />
      <Partners />
      <GravityTeam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
