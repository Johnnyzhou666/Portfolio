import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import './index.css';

const Navbar = () => {

    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
         
            const bottomReached = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;
            setIsBottom(bottomReached);
        };

        window.addEventListener('scroll', handleScroll);
    
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>

            <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isBottom ? 'force-contact-active' : ''}`}>
                <div id="navbarNav" style={{ width: '100%' }}>
                    <ul className="navbar-nav dis">
                        <div className="navbar-header header-top">
                            <a className="navbar-brand" href="https://johnnyzhou666.github.io/Portfolio/" style={{ color: 'rgb(184, 132, 227)' }}>JonyZ</a>
                        </div>
                        
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="home" spy={true} smooth={true} offset={-100} duration={500}>
                                <i className="fa-solid fa-house"></i> Home
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="about" spy={true} smooth={true} offset={-100} duration={500}>
                                <i className="fa-solid fa-user"></i> About
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="pro-card" spy={true} smooth={true} offset={-100} duration={500}>
                                <i className="fa-solid fa-computer"></i> Projects
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link" to="skills" spy={true} smooth={true} offset={-100} duration={500}>
                                <i className="fa-regular fa-thumbs-up"></i> Skills
                            </Link>
                        </li>
                        
                        <li className="nav-item">
                         
                            <Link id="contact-nav-link" className="nav-link" to="contact" spy={false} smooth={true} offset={0} duration={500}>
                                <i className="fa-regular fa-address-card"></i> Contact
                            </Link>
                        </li>
                        
                        <li className="nav-item logo">
                            <a href="https://github.com/Johnnyzhou666" style={{ textDecoration: 'none' }}>
                                <i className="fa-brands fa-github fa-2xl" style={{ color: '#000000' }}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
