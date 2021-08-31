import React from 'react';
import '../App.scss';
import TopPage from '../components/topPage';
import Header from "../components/header";
import MidPage from "../components/midPage";
import MainFooter from "../components/footer";
import axios from 'axios';
import { useHistory, Redirect } from "react-router-dom";

class MainPageAuth extends React.Component {



  render() {
      axios.get('http://localhost:3001/login')
        .then((response) => {
          if (!response) {
            return <Redirect to="/" />
          }
        })
    



    return (
      <div className="mainPage">
        <Header />
        <TopPage />
        <MidPage />
        <div style={{ backgroundColor: 'rgba(177, 137, 85, 0.377)' }}>
          <MainFooter />
        </div>
      </div>
    )
  }
}

export default MainPageAuth;