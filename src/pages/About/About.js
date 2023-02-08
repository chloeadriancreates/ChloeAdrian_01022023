import "./About.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";

function About() {
    const [values, setValues] = useState([{}]);

    const getValues = async() => {
        try {
        const response = await fetch("./values.json");
        setValues(await response.json());
        } catch(error) {
        console.log(error);
        }
    };

    useEffect(() => {
        getValues();
        document.title = `À propos – Kasa`;
    }, []);

    return (
        <div className="about">
            <Header />
            <Hero />
            <div className="collapseList">
                { values.map( value => <Collapse key={value.id} title={value.title} content={value.content} size="large" />) }
            </div>
            <Footer />
        </div>
    );
}

export default About;