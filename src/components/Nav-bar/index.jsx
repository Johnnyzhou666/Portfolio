import React from "react";
import { Link } from "react-scroll";
import './index.css';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div id="navbarNav" style={{ width: '100%' }}>
                    <ul className="navbar-nav dis">
                        <div className="navbar-header header-top">
                            <a className="navbar-brand" href="https://johnnyzhou666.github.io/Portfolio/" style={{ color: 'rgb(184, 132, 227)' }}>JonyZ</a>
                        </div>
                        <a href="javascript:void(0)"><li className="nav-item">
                            <Link className="nav-link" to="home"
                                spy
                                smooth={true}
                                offset={-200}
                                duration={500} ><i className="fa-solid fa-house"></i>Home</Link>
                        </li></a>
                        <a href="javascript:void(0)"><li className="nav-item">
                            <Link className="nav-link" to="about"
                                spy
                                smooth={true}
                                offset={-100}
                                duration={500} ><i className="fa-solid fa-user"></i>About</Link>
                        </li></a>
                        <a href="javascript:void(0)"><li className="nav-item ">
                            <Link className="nav-link" to="pro-card"
                                spy
                                smooth={true}
                                offset={-100}
                                duration={500} ><i className="fa-solid fa-computer"></i>Projects</Link>
                        </li></a>
                        <a href="javascript:void(0)"><li className="nav-item ">
                            <Link className="nav-link" to="skills"
                                spy
                                smooth={true}
                                offset={-100}
                                duration={500} ><i className="fa-regular fa-thumbs-up"></i>Skills</Link>
                        </li></a>
                        <a href="javascript:void(0)"><li className="nav-item ">
                            <Link className="nav-link" to="letter"
                                spy
                                smooth={true}
                                offset={128}
                                duration={500} ><i className="fa-regular fa-address-card"></i>Contact</Link>
                        </li></a>
                        <li className="nav-item logo">
                            <a href="https://github.com/Johnnyzhou666" style={{ textDecoration: 'none' }}><i className="fa-brands fa-github fa-2xl" style={{ color: '#000000' }}></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
