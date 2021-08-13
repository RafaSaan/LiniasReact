import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import BgHero from "./Components/BgHero";
import Footer from "./Components/Footer";
import MeetUs from "./Components/MeetUs";
import Navbar from "./Components/Navbar";
import Obras from "./Components/Obras";
import Phrase from "./Components/Phrase";
import Store from "./Components/Store";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <BgHero />
        <AboutUs />
        <MeetUs />
        <Obras />
        <Store />
        <Phrase />
      </main>
      <Router>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
