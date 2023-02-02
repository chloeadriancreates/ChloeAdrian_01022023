import "./App.scss";
import Hero from "../Hero/Hero";
import Header from "../Header/Header";
import LodgingList from "../LodgingList/LodgingList";
import Footer from "../Footer/Footer";
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
  }, []);

  useEffect(() => {
    console.log(lodgings);
  }, [lodgings]);

  return (
    <div className="app">
      <Header />
      <Hero />
      <LodgingList lodgings={lodgings} />
      <Footer />
    </div>
  );
}

export default App;