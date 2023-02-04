import "./Hero.scss";

function Hero(props) {
    // return (
    //         <div className="hero">
    //             <h2 className="hero-title">Chez vous,&nbsp;</h2>
    //             <h2 className="hero-title">partout et ailleurs</h2>
    //         </div>
    // );

    return (props.home)
              ? <div className="hero hero--home">
                    <h2 className="hero-title">Chez vous,&nbsp;</h2>
                    <h2 className="hero-title">partout et ailleurs</h2>
                </div>
            : <div className="hero hero--about"></div>
    ;
}

export default Hero;