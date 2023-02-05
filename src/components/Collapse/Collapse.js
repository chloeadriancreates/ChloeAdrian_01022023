import "./Collapse.scss";
import icon from "../../assets/collapseIcon.svg";
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
            <div className="collapse-main">
                <p className="collapse-main-title">{title}</p>
                <button className={ open ? "collapse-main-button collapse-main-button--open" : "collapse-main-button" } onClick={toggleCollapse}>
                    <img src={icon} alt="" />
                </button>
            </div>
            { open && <div className="collapse-content">
                { streamlineContent(content).map((item, index) => <p key={index} className="collapse-content-text">{item}</p>) }
            </div> }
        </div>
    );
}

export default Collapse;