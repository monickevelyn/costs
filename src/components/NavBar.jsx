import { Link } from "react-router-dom";
import logo from "../img/costs_logo.png"
import './stylecomponents/NavBar.css'

export default function NavBar() {
    return ( 
        <>
         <header className="header">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>                 
            </div>
            <nav className="nav-bar">
                <Link to="/" className="link">Home</Link> 
                <Link to="/projects" className="link">Projetos</Link> 
                <Link to="/company" className="link">Empresa</Link>            
                <Link to="/contact" className="link">Contato</Link> 
            </nav>
         </header>
        </>
    );
}