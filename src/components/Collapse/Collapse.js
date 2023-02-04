import "./Collapse.scss";
import icon from "../../assets/collapseIcon.svg";
import { useState } from "react";

function Collapse(props) {
    const { title, content, size } = props;
    const [open, setOpen] = useState(false);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    return (
        <div className={`collapse collapse--${size}`}>
            <div className="collapse-main">
                <h3 className="collapse-main-title">{title}</h3>
                <button className={ open ? "collapse-main-button collapse-main-button--open" : "collapse-main-button" } onClick={toggleCollapse}>
                    <img src={icon} alt="" />
                </button>
            </div>
            {
                open && <p className="collapse-content">{content}</p>
            }
        </div>
    );
}

export default Collapse;