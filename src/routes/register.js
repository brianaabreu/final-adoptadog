import React, { useState, useEffect } from "react";
import "../App.scss";
import axios from "axios";
import Header from "../components/header"
import Logo from '../img/Untitled.png';
import { Link } from "react-router-dom"


function Register() {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    axios.defaults.withCredentials = true;

    const register = () => {
        axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div>
            <div className="headContainer" style={{ marginBottom: '100px', borderBottom: '1px solid grey' }}>
                <Link to="/">
                    <div className="logo">
                        <img style={{ width: "50%" }} src={Logo} alt="logo" />
                    </div>
                </Link>
                <div className="navBar">
                    <nav style={{ float: 'right' }}>
                        <Link to="/register"><button className="bttn-stretch bttn-sm">Sign Up</button></Link>
                        <Link to="/login"><button className="bttn-stretch bttn-sm" >Login</button></Link>

                    </nav>
                </div>
            </div>

            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center'
            }} >
                <div className="Registration" >
                    <h1 style={{ marginTop: 0, boxSizing: 'unset', fontWeight: '400' }} >Create an Account!</h1>
                    <label>Username</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }}
                        placeholder="username" />
                    <label>Password</label>
                    <input
                        type="Password"
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }}
                        placeholder="password" />
                    <div className="footerRegister">
                       <Link to="/login"><button onClick={register} >Register</button></Link>
                        <div>
                            Already have an account?  <Link to="/login" ><a href="">Login!</a></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Register;