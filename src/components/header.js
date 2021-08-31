import React from 'react';
import Logo from '../img/Untitled.png';
import { Link } from 'react-router-dom';
import './../App.scss';




const Header = (props) => {

    return (
        <div className="headContainer">
            <Link to="/">
                <div className="logo">
                    <img style={{ width: "50%" }} src={Logo} alt="logo" />
                </div>
            </Link>
            <div className="navBar">
                <nav style={{backgroundColor:'none', outline:'none', border:'none'}}>
                    <Link to="/newpost"><button className="navButton">New Post</button></Link>
                    <Link to="/contact"><button className="navButton">Contact</button></Link>
                    <Link to="/register"><button className="navButton">Sign Up</button></Link>
                    <Link to="/login"><button className="navButton" >Login</button></Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;