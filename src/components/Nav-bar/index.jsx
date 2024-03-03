import React from "react";
import { Link } from "react-scroll";
import './index.css';
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div id="navbarNav" style={{ width: '100%' }}>
                    <ul class="navbar-nav dis">
                        <div className="navbar-header header-top">
                            <a className="navbar-brand" href="/" style={{ color: 'rgb(184, 132, 227)' }}>JonyZ</a>
                        </div>
                        <li class="nav-item">

                            <Link className="nav-link active" to="navbarNav"
                                smooth={true}
                                offset={0}
                                duration={500} ><i class="fa-solid fa-house"></i>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500} ><i class="fa-solid fa-user"></i>About</Link>
                        </li>
                        <li class="nav-item ">
                            <Link className="nav-link" to="projects"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500} ><i class="fa-solid fa-computer"></i>Projects</Link>
                        </li>
                        <li class="nav-item ">
                            <Link className="nav-link" to="skills"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500} ><i class="fa-regular fa-thumbs-up"></i>Skills</Link>
                        </li>
                        <li class="nav-item ">
                            <Link className="nav-link" to="footer"
                                spy={true}
                                smooth={true}
                                offset={-150}
                                duration={500} ><i class="fa-regular fa-address-card"></i>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
