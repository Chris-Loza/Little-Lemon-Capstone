import React from "react";
import { useState } from "react";
import logo from "../images/Logo .svg"

const Nav = () => {
    const [burgerMenu, setBurgerMenu] = useState(false);

    const toggleBurger = () => {
        setBurgerMenu(!burgerMenu);
    };
    return (
        <nav className={`navbar ${burgerMenu ? "open" : ""}`}>
            <a href="/" className="logo">
                <img src={logo} alt="Little Lemon logo"></img>
            </a>
            <div className="menu-icon" onClick={toggleBurger}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${burgerMenu ? "visible" : ""}`}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;