import "./About.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import { getData } from "../../utils/getData";

function About() {
    const [values, setValues] = useState(null);

    useEffect(() => {
        getData("./values.json", setValues);
        document.title = `À propos – Kasa`;
    }, []);

    return (
        <div className="about">
            <Header />
            <Hero />
            <div className="about-collapseList">
                { values &&
                    values.map( value => <Collapse key={value.id} title={value.title} content={value.content} size="large" />)
                }
            </div>
            <Footer />
        </div>
    );
}

export default About;