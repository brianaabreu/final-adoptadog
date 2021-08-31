import React from 'react';
import Logo from '../img/Untitled.png';
import { Link } from 'react-router-dom';





const Header = (props) => {

    return (
        <div className="headContainer">
            <Link to="/">
                <div className="logo">
                    <img style={{ width: "50%" }} src={Logo} alt="logo" />
                </div>
            </Link>
            <div className="navBar">
                <nav>
                    <Link to="/newpost"><button className="bttn-stretch bttn-sm">New Post</button></Link>
                    <Link to="/contact"><button className="bttn-stretch bttn-sm">Contact</button></Link>
                    <Link to="/register"><button className="bttn-stretch bttn-sm">Sign Up</button></Link>
                    <Link to="/login"><button className="bttn-stretch bttn-sm" >Login</button></Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;