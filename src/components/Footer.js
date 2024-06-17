import React from "react"; 
import logo from "../images/Logo .svg"

const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt="Little Lemon logo" />
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Doormat Navigation</h3>
                    <ul id="footer-links">
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
                </div>
                <div id="contactFooter">
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: Down The Road St., In Your City</li>
                        <li>Phone: 123-456-7890</li>
                        <li>Email: adrianandMario@gmail.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="/">Facebook</a>
                        </li>
                        <li>
                            <a href="/">Instagram</a>
                        </li>
                        <li>
                            <a href="/">X</a>
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
