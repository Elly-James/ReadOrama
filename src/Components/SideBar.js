import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faHeart, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import logo from "../logo.png";


function SideBar() {
    const [expanded, setExpanded] = useState(true);

    // The Icons used on the sidebar
    
    const sections = [
        { name: "Home", icon: faHouse, path: "/" },
        { name: "Shop", icon: faShopify, path: "/shop" },
        { name: "Cart", icon: faCartShopping, path: "/cart" },
        { name: "Favorites", icon: faHeart, path: "/favorites" },
    ];

    return (
        <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
            <button 
                className="toggle-button"
                onClick={() => setExpanded(!expanded)}
            >
                <FontAwesomeIcon icon={expanded ? faChevronLeft : faChevronRight} />
            </button>

            <div className="sidebar-header">
                <img src={logo} alt="logo" className="logo" />
            </div>

            <ul className="nav-links">
                {sections.map((section) => (
                    <li key={section.name}>
                        <Link to={section.path} className="nav-link">
                            <FontAwesomeIcon icon={section.icon} className="nav-icon" />
                            <span className="nav-text">{section.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideBar;