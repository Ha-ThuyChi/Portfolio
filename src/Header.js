import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <div>
            <nav>
                <NavLink to="/" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>
                    Home
                </NavLink>
                <NavLink to="/MyResume" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>
                    My Resume
                </NavLink>
                <NavLink to="/MyProjects" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>
                    My Projects
                </NavLink>
                <NavLink to="/Contact" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>
                    Get in touch 
                </NavLink>
            </nav>
        </div>
    )
}