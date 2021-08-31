import React from 'react';
import face2 from "../img/face2.png";
import Twitter from "../img/twitter.svg";
import Donate from "../img/hands.svg";
import Contact from "../img/mail.svg";
import Facebook from "../img/facebook.svg";


const MainFooter = () => {

    return (
        <div className="mainfooter" style={{  backgroundColor: 'rgba(177, 137, 85, 0.377)'}}>
            <div className="main-footerTitle"  > Contact us! </div>
            <div className="aboutlink" >
                <div className="linksFooter">
                    <div classname="leftFooter" style={{display:"flex"}}>
                        <a href="#"><img src={Contact} alt="Contact" /> </a>
                        <a href="#"><img src={Twitter} alt="Twitter" /> </a>
                        <a href="#"><img src={Donate} alt="Donate" style={{width:'60px'}} /> </a>
                        <a href="#"><img src={Facebook} alt="Facebook" /> </a>
                    </div>
                </div>
                <div className="main-footerImg"  >
                    <img src={face2} alt="" style={{ width: '200px' }} />
                </div>
            </div>
        </div>
    )
}


export default MainFooter;