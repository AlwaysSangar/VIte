import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">My Portofolio</h1>
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/">About</Link></li>
                <li><Link to ="/">Projects</Link></li>
                <li><Link to ="/">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;