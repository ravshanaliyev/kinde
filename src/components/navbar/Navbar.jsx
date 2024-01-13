import { useState } from "react"
import Brand from '../../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <img src={Brand} alt="" />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <GiHamburgerMenu />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <div className="nav-element-section">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects">Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="nav-icons">
                            <NavLink to={"/account"} className='nav-icon-link '><IoPersonOutline size={23} /></NavLink>
                            <NavLink to={"/wishlist"} className='nav-icon-link '><IoMdHeartEmpty size={23} /></NavLink>
                            <NavLink to={"/cart"} className='nav-icon-link '><BsCart size={23} /></NavLink>
                            <NavLink to={"/login"} className={'nav-icon-btn '}>Get In Touch</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar