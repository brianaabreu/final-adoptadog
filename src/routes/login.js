import React, { useState, useEffect } from "react";
import { Alert } from 'reactstrap';
import "../App.scss";
import axios from "axios";
import Logo from '../img/Untitled.png';
import { Link, useHistory } from "react-router-dom"
import "../index.css"



function Login() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState(false);

    axios.defaults.withCredentials = true;


    const login = () => {
        axios.post('http://localhost:3001/login', {
            username: username,
            password: password,
        }).then((response) => {

            if (response.data.auth) {
                localStorage.setItem("token", response.data.token);
                setLoginStatus(true, response.data.message)
                history.push("/authMain")
                
                
            } else {
                setLoginStatus(response.data.message);
                console.log(response)
            }
        });
    };

    const history = useHistory();



    return (
        <div>
            <div className="headContainer" style={{ marginBottom: '150px', borderBottom: '1px solid grey' }}>
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
            <div style={{ textAlign: '-webkit-center', marginTop: '-60px', marginBottom: '60px' }}>

                {loginStatus ?
                    <Alert style={{ width: '30%' }} color="danger">
                        {loginStatus}                   
                    </Alert>
                    : null}




            </div>

            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center'
            }} >
                <div className="Registration" >
                    <h1 style={{ marginTop: 0, boxSizing: 'unset', fontWeight: '400' }} >Login!</h1>
                    <label>Username</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }} />
                    <label>Password</label>
                    <input
                        type="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                    <div className="footerRegister">

                        <button onClick={login} >Login</button>



                        <div>
                            Don't have an account  <Link to="/register"><a href="">Register!</a></Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;