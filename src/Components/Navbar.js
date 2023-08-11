import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/Screenshot from 2023-08-10 21-38-31.png"

function Navbar(){
    return(
        <div className="navbar navbar-expand-lg back_nav">
            <div>
                <img src={logo} alt="Bootstrap" width="150" height="80"/>
            </div>
            <div className="collapse navbar-collapse ">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><NavLink className="Navlink" exact to="/">home</NavLink></li>
                    <li className="nav-item"><NavLink className="Navlink" to="/about-us">About Us</NavLink></li>
                    <li className="nav-item"><NavLink className="Navlink" to="/jobs">jobs</NavLink></li>
                    <li className="nav-item"><NavLink className="Navlink" to="/post-job">post-job</NavLink></li>
                    <li className="nav-item"><NavLink className="Navlink" to="/log-in">Login</NavLink></li>
                    <li className="nav-item"><NavLink className="Navlink" to="/sign-in">SignIn</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;