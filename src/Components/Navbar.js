import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/Screenshot from 2023-08-10 21-38-31.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg back_nav">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img src={logo} alt="Bootstrap" width="150" height="80" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="Navlink" exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="Navlink" to="/about-us">
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="Navlink" to="/jobs">
                                Jobs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="Navlink" to="/post-job">
                                Post Job
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="Navlink" to="/log-in">
                                Login
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="Navlink" to="/sign-in">
                                Sign In
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
