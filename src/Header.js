import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <div>
            <nav>
                <a href="#about" className="nav-link">About me</a>
                <a href="#projects" className="nav-link">My Projects</a>
                <a href="#resume" className="nav-link">My Resume</a>
                <a href="#contact" className="nav-link">Get in Touch</a>
            </nav>
        </div>
    )
}