import "./Collapse.scss";
import arrow from "../../assets/arrow.svg";
import { useState } from "react";

function Collapse(props) {
    const { title, content, size } = props;
    const [open, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    const streamlineContent = (content) => {
        if(typeof(content) !== "object") {
            return [content];
        } else {
            return content;
        }
    };

    return (
        <div className={`collapse collapse--${size}`}>
            <button className="collapse-main" onClick={toggleCollapse}>
                <p className="collapse-main-title">{title}</p>
                <img className={ open ? "collapse-main-icon collapse-main-icon--open" : "collapse-main-icon" } src={arrow} alt={ open ? "Fermer" : "Ouvrir" } />
            </button>
            { open && <div className="collapse-content">
                { streamlineContent(content).map((item, index) => <p key={index} className="collapse-content-text">{item}</p>) }
            </div> }
        </div>
    );
}

export default Collapse;