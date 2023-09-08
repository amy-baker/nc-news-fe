import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
    return(
    <nav className="navigation">
        <NavLink to='/' className="nav-link"
        activeclassname="active">All </NavLink>
        <NavLink activeclassname="active" to='/articles/coding' className="nav-link">Coding</NavLink>
        <NavLink to='/articles/cooking' className="nav-link"
        activeclassname="active">Cooking</NavLink>
        <NavLink to='/articles/football' className="nav-link"
        activeclassname="active">Football</NavLink>
    </nav>
    )
}

export default Navbar;