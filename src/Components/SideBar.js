import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons"; // Correct import for faShopify

function SideBar() {
    const sections = [
        { name: "Home", icon: faHouse },
        { name: "Shop", icon: faShopify },
        { name: "Cart", icon: faCartShopping },
        { name: "Favorites", icon: faHeart },
    ];

    return (
        <div className="grid grid-cols-2 gap-4 p-6">
            <h1>ReadOrama</h1>
            <img src="https://i.pinimg.com/736x/cc/19/31/cc193190ec30a77865f3fb118bbc8ad3.jpg" alt="logo"/>

            {sections.map((section) => (
                <div
                    key={section.name}
                    className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-2xl shadow-md hover:bg-gray-200 transition"
                >
                    <FontAwesomeIcon icon={section.icon} size="2x" className="text-blue-500 mb-2" />
                    <p className="text-sm font-medium text-gray-700">{section.name}</p>
                </div>
            ))}
        </div>
    );
}

export default SideBar;

/*

import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
    const sections = [
        { name: "Home", path: "/" },
        { name: "Shop", path: "/shop" },
    ];

    return (
        <div className="grid grid-cols-2 gap-4 p-6">
            <h1>ReadOrama</h1>
            <img src="https://i.pinimg.com/736x/cc/19/31/cc193190ec30a77865f3fb118bbc8ad3.jpg" alt="logo" />
            {sections.map((section) => (
                <Link to={section.path} key={section.name} className="flex flex-col items-center justify-center">
                    <p>{section.name}</p>
                </Link>
            ))}
        </div>
    );
}

export default SideBar;
*/