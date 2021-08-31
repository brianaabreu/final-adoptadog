import React from 'react';
import "../App.scss";
import DogFront from "../img/bassetGold.png"
import milkBone from "../img/milkbone.png";
import {Link} from "react-router-dom";


const TopPage = () => {

    return (
        <div className="topPage">
            <div className="pictureLeft">
                <img style={{ width: '11%', verticalAlign: 'top' }} src={milkBone} alt="" />
                <img style={{ marginLeft: '70px', width: '77%', marginTop: '25px' }} src={DogFront} alt="" />

            </div>
            <div className="sloganRight">
                <h1>Give a<br></br> <strong>H A N D</strong><br></br> for a<br></br> <strong>P A W</strong></h1>
                <div className="donateButton">

                    <Link style={{width:'100%'}} to="/donate"> <button style={{ marginRight: '5px', paddingRight: '17px', paddingLeft: '17px' }}>Donate!</button></Link>
                   <Link to="/about"><button>About us!</button></Link>
                </div>
            </div>
        </div>
    )
}

export default TopPage;