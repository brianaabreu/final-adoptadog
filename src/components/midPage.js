import React from 'react';
import "../App.scss";
import brownDog from "../img/brownDog.png";
import dogBeach from "../img/dogBeach.png";
import dogFace from "../img/dogFriends.png";

const MidPage = () => {

    return (
        <div className="midWrapper" style={{backgroundColor: 'rgb(253, 231, 205, 0.589)'}}>
            <div className="cardWrapper" style={{ textAlign: "-webkit-center", verticalAlign: 'middle' }}>
                <img src={brownDog} className="dogCard" alt="" />
                <div class="main">
                    <ul className="cards">
                        <li class="cards_item">
                            <div class="card" style={{
                                backgroundColor: 'rgba(255, 102, 0, 0.486)',
                                borderRadius: '0.25rem',
                                boxShadow: '0 20px 40px -14px rgba(0, 0, 0, 0.25)'
                            }}>
                                <div class="card_content">
                                    <h2 class="card_title">Our Mission</h2>
                                    <p class="card_text">Our goal is to rescue strays and find them their new home!</p>
                                    <button class="btn card_btn">Read More</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cardWrapper" style={{ textAlign: "-webkit-center", verticalAlign: 'middle' }}>
            <img src={dogBeach} className="dogCard" alt="" />
                <div class="main">
                    <ul class="cards">
                        <li class="cards_item">
                        <div class="card" style={{
                                backgroundColor: 'rgba(255, 102, 0, 0.486)',
                                borderRadius: '0.25rem',
                                boxShadow: '0 20px 40px -14px rgba(0, 0, 0, 0.25)'
                            }}>
                                <div class="card_content">
                                    <h2 class="card_title">What you can do!</h2>
                                    <p class="card_text">Help the cause by donating, rescuing, or bringing in strays!</p>
                                    <button 
                                        class="btn card_btn">
                                            Read More
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cardWrapper" style={{ textAlign: "-webkit-center", verticalAlign: 'middle' }}>
            <img src={dogFace} className="dogCard" alt="" />
                <div class="main">
                    <ul class="cards">
                        <li class="cards_item">
                        <div class="card" style={{
                                backgroundColor: 'rgba(255, 102, 0, 0.486)',
                                borderRadius: '0.25rem',
                                boxShadow: '0 20px 40px -14px rgba(0, 0, 0, 0.25)'
                            }}>
                                <div class="card_content">
                                    <h2 class="card_title">Join us!</h2>
                                    <p class="card_text">Create an account to post and see listings! </p>
                                    <button class="btn card_btn">Read More</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div >

    )
}

export default MidPage;