import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../images/restauranfood.jpg"

const Header = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking" aria-label="Click">
                        <button aria-label="Click">Reserve a Table</button>
                    </Link>
                </div>

                <div className="banner-img">
                    <img src={bannerImage} alt="Plate of Mediterranean food" />
                </div>
            </section>
        </header>
    );

};

export default Header;