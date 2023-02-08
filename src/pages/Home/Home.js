import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import LodgingList from "../../components/LodgingList/LodgingList";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [lodgings, setLodgings] = useState([{}]);

  const getLodgings = async() => {
    try {
      const response = await fetch("./lodgings.json");
      setLodgings(await response.json());
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLodgings();
    document.title = `Accueil – Kasa`;
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero home={true} />
      <LodgingList lodgings={lodgings} />
      <Footer />
    </div>
  );
}

export default App;