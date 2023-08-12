import React from "react";
import { Link } from "react-router-dom";
import Terms from "./Terms";
import logo from "../Images/Screenshot from 2023-08-10 21-38-31.png"

function Footer(){
    return(
        <footer className="ft_main">
            <div className="d-flex flex-row mb-3 d-flex justify-content-evenly">
                <div>
                    <img className="ft_logo" src={logo} alt="logo"/>
                </div>
                <div>
                    <h3 className="text-capitalize">contact us</h3>
                    <div className="d-flex flex-row mb-3 d-flex justify-content-evenly">
                        <div className="">
                            <p className="mjr_icns"><i class="fa-solid fa-envelopes-bulk"></i></p>
                            <p className="mjr_icns"><i class="fa-solid fa-globe"></i></p>
                        </div>
                        <div>
                            <div>
                                <p className="text-uppercase">do you have any questions?</p>
                                <a className="ft_link" href="/">hire.hub@gmail.com</a>
                            </div>
                            <div>
                                <p className="text-uppercase">socials network</p>
                                <div className="d-flex flex-row mb-3 d-flex justify-content-evenly">
                                    <a className="ft_link" href="https://twitter.com/i/flow/login" target="blank"><i class="fa-brands fa-twitter"></i></a>
                                    <a className="ft_link" href="https://www.instagram.com/" target="blank"><i class="fa-brands fa-instagram"></i></a>
                                    <a className="ft_link" href="https://www.facebook.com/" target="blank"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a className="ft_link" href="https://www.youtube.com/" target="blank"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-capitalize">quick links</h3>
                    <div>
                        <ul>
                            <li className="ft_list "><Link className="ft_link" exact to="/">HOME</Link></li>
                            <li className="ft_list "><Link className="ft_link" to="/jobs">JOBS</Link></li>
                            <li className="ft_list "><Link className="ft_link" to="/post-job">POST A JOB</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="text-capitalize">our company</h3>
                    <div>
                        <ul>
                            <li className="ft_list"><Link className="ft_link" to="/about-us">ABOUT US</Link></li>
                            <li className="ft_list"><Link className="ft_link">CONTACT US</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row mb-3 d-flex justify-content-evenly">
                <div>
                    <h3>© Copyright 2023 Hire-Hub. All rights reserved</h3>
                </div>
                <div className="d-flex flex-row mb-3 d-flex">
                    <Terms />
                </div>
            </div>
        </footer>
    )
}

export default Footer;