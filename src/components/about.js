import React from "react";
import { Media } from 'reactstrap';
import Logo from '../img/Untitled.png';
import { Link } from 'react-router-dom';
import Header from "./header";
import LeftDog from "../img/beachDog.jfif"
import Brown from "../img/brownWhite.jfif"
import MainFooter from "./footer";
import Friends from "../img/backyardDog.jfif";


const About = () => {

    return (
        <div>
            <Header />
            <div style={{ backgroundColor: 'rgb(240, 227, 212)', borderTop: '1px solid grey' }}>
                <div className="aboutWrapper">
                    <Media style={{ paddingTop: '70PX', marginBottom: '50px', marginLeft: '50px' }}>
                        <Media left href="#">
                            <Media src={LeftDog} style={{ width: '400px', boxShadow: '0 0 12px #000000' }} alt="Generic placeholder image" />
                        </Media>
                        <Media body style={{ marginLeft: '20px' }}>
                            <Media heading>
                                Our Mission
                    </Media>
                        We are committed to helping stray dogs and making sure they<br></br> find a new home.
                        Our mission is to protect dogs from anywhere<br></br> and do our best to help them, we
                        take in dogs on the street, even personal donations.
                 </Media>
                    </Media>
                    <Media style={{ marginBottom: '50px', marginRight: '50px' }}>
                        <Media body style={{ textAlign: 'end', marginRight: '20px' }}>
                            <Media heading>
                                Volunteer!
                    </Media>
                        Want to help the cause? Visit our page specifically for donating<br></br> to all of
                        our organizations, or even volunteer in the community to take in<br></br> any strays
                        and find rescues, bring them in and we will find them a new family! If you find a stray<br></br>
                        but don't have time to bring them in, contact us and we will send someone at the location last seen!
                 </Media>
                        <Media href="#">
                            <Media src={Brown} style={{ width: '400px', boxShadow: '0 0 12px #000000' }} alt="Generic placeholder image" />
                        </Media>
                    </Media>
                    <Media style={{ paddingBottom: '70px', marginLeft: '50px' }}>
                        <Media left href="#">
                            <Media src={Friends} style={{ width: '400px', boxShadow: '0 0 12px #000000' }} alt="Generic placeholder image" />
                        </Media>
                        <Media body style={{ marginLeft: '20px' }}>
                            <Media heading>
                                Adopt!
                    </Media>
                        Can't find the time to donate or volunteer? The best way to help<br></br> the cause is to
                        donate right from our organization! Be the new home<br></br> for any of our rescues! We
                        make the process simple! Simply click on<br></br>the contact page if you are interested in seeing 
                        your possible new best friend!
                 </Media>
                    </Media>
                </div>
            </div>
            <MainFooter />
        </div>
    )
}

export default About;