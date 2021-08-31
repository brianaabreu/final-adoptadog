import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import Logo from '../img/Untitled.png';
import { Link } from "react-router-dom";
import face1 from "../img/face1.png";
import MainFooter from './footer';
import face2 from "../img/face2.png";
import Twitter from "../img/twitter.svg";
import donate1 from "../img/hands.svg";
import Contact from "../img/mail.svg";
import Facebook from "../img/facebook.svg";
import axios from 'axios';
import { Alert } from 'reactstrap';

const Donate = () => {

    const [donationName, setDonationName] = useState('');
    const [donationAmount, setDonationAmount] = useState('');
    const [donationDate, setDonationDate] = useState('');
    const [donationOrg, setDonationOrg] = useState('');

    const [donationStatus, setDonationStatus] = useState("");

    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);


    axios.defaults.withCredentials = true;

    const donate = () => {
        axios.post('http://localhost:3001/donate', {
            name: donationName,
            amount: donationAmount,
            date: donationDate,
            organization: donationOrg
        }).then((response) => {

            if (response.data.message) {
                setDonationStatus(response.data.message)
            }
        });
    }

    return (
        <div>
            <div className="headContainer" style={{ marginBottom: '50px' }}>
                <Link to="/">
                    <div className="logo">
                        <img style={{ width: "50%" }} src={Logo} alt="logo" />
                    </div>
                </Link>
                <div className="navBar">
                    <nav style={{ float: 'right' }}>
                        <button className="bttn-stretch bttn-sm">Adopt</button>
                        <button className="bttn-stretch bttn-sm">New Post</button>
                        <button className="bttn-stretch bttn-sm">Contact</button>
                        <Link to="/register"><button className="bttn-stretch bttn-sm">Sign Up</button></Link>
                        <Link to="/login"><button className="bttn-stretch bttn-sm" >Login</button></Link>

                    </nav>
                </div>
            </div>
            <div classname="donateWrap" style={{ textAlign: '-webkit-center' }}>
                <img src={face1} style={{
                    width: '18%',
                    marginBottom: '-43px'
                }} />
                <div className="formWrapper">
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                type="text"
                                name="text"
                                placeholder="Whats your name?"
                                onChange={(e) => {
                                    setDonationName(e.target.value);
                                }}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleNumber">Amount</Label>
                            <Input
                                type="number"
                                name="number"
                                id="exampleNumber"
                                placeholder="$"
                                onChange={(e) => {
                                    setDonationAmount(e.target.value);
                                }}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleDate">Date</Label>
                            <Input
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                                onChange={(e) => {
                                    setDonationDate(e.target.value);
                                }}
                            />
                        </FormGroup>


                        <FormGroup>
                            <Label for="exampleSelect">Select an Organization!</Label>
                            <Input type="select" name="select" id="exampleSelect"
                                onChange={(e) => {
                                    setDonationOrg(e.target.value);
                                }}>
                                <option>Click for more</option>
                                <option>Dog Den</option>
                                <option>Adopt-a-Dog</option>
                                <option>Pick-a-Pet</option>
                                <option>Pet Pocket</option>
                                <option>Pet Pal</option>
                            </Input>
                            <Button onClick={donate} style={{ marginTop: '25px', width: '50%' }}>Submit</Button>
                        </FormGroup>


                    </Form>
                </div>
                <div style={{ textAlign: '-webkit-center', marginTop: '-60px', marginBottom: '100px' }}>
                    {donationStatus ?
                        <Alert isOpen={visible} toggle={onDismiss} style={{ width: '30%' }} color="warning">
                            {donationStatus}
                        </Alert>
                        : null}

                </div>
            </div>
            <div className="mainfooter" style={{ backgroundColor: ' rgba(177, 137, 85, 0.377)' }}>
                <div className="main-footerTitle"  > Contact us! </div>
                <div className="aboutlink" >
                    <div className="linksFooter">
                        <div classname="leftFooter" style={{ display: "flex" }}>
                            <a href="#"><img src={Contact} alt="Contact" /> </a>
                            <a href="#"><img src={Twitter} alt="Twitter" /> </a>
                            <a href="#"><img src={donate1} alt="Donate" style={{ width: '60px' }} /> </a>
                            <a href="#"><img src={Facebook} alt="Facebook" /> </a>
                        </div>
                    </div>
                    <div className="main-footerImg"  >
                        <img src={face2} alt="" style={{ width: '200px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;