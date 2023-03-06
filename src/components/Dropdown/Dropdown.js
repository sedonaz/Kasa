import React, { useState } from "react";
import Fleche from "../../assets/images/flecheBas.png";
import "./Dropdown.scss";
const Dropdown = ({titre, description}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="dropdown__liste">
            <div className="dropdown" id={`dropdown-${titre}`}>
                <div className="dropdown__header">
                    <div className="dropdown__titre">{titre}</div>
                    <span className={`dropdown__fleche ${isOpen}`} onClick={() => setIsOpen(!isOpen)}>
                        <img src={Fleche} alt="liste"/>
                    </span>
                </div>
            {
                isOpen && <div className="dropdown__description">{description}</div>
            }
            </div>
        </div>
        );
    };
    
    export default Dropdown;