import React from 'react';
import '../App.scss';
import TopPage from '../components/topPage';
import Header from "../components/header";
import MidPage from "../components/midPage";
import MainFooter from "../components/footer";
import Logo from '../img/Untitled.png';
import { Link, useHistory } from "react-router-dom"

function MainPageUnauth() {
  return (
    <div className="mainPage">
      <div className="headContainer">
                <Link to="/">
                    <div className="logo">
                        <img style={{ width: "50%" }} src={Logo} alt="logo" />
                    </div>
                </Link>
                <div className="navBar">
                    <nav style={{ float: 'right' }}>
                        <Link to="/register"><button className="bttn-stretch bttn-sm">Sign Up</button></Link>
                        <Link to="/login"><button className="bttn-stretch bttn-sm" >Login</button></Link>
                        <Link to="/contact"><button className="bttn-stretch bttn-sm" >Contact</button></Link>


                    </nav>
                </div>
            </div>
            <div style={{ textAlign: '-webkit-center', marginTop: '-60px', marginBottom: '60px' }}>
              </div>
      <TopPage />
      <MidPage />
      <div style={{backgroundColor: 'rgba(177, 137, 85, 0.377)'}}>
      <MainFooter />
      </div>
    </div>
);
}

export default MainPageUnauth;