import "./stylecomponents/Footer.css"

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return ( 
        <>
        <footer className="footer">
            <ul className="social-lista">
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className="costs-copy">
                <span>Costs</span> &copy; 2024
            </p>
        </footer>
        </>
    );
}