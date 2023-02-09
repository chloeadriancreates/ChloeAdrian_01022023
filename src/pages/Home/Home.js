import "./Home.scss";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import LodgingList from "../../components/LodgingList/LodgingList";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { getData } from "../../utils/getData";

function App() {
  const [lodgings, setLodgings] = useState(null);

  useEffect(() => {
    getData("./lodgings.json", setLodgings);
    document.title = `Accueil – Kasa`;
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero home={true} />
      { lodgings &&
        <LodgingList lodgings={lodgings} />
      }
      <Footer />
    </div>
  );
}

export default App;