import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';
import mainPageunAuth from "./pages/mainPageunAuth";
import LoginPage from "./pages/LoginPage";
import Register from "./routes/register";
import Donate from "./components/donate";
import 'bootstrap/dist/css/bootstrap.css';
import PrivateRoute from './components/ProtectedRoute';
import About from "./components/about";
import Contact from "./components/contact";
import NewPost from "./components/newPost";
import { useState } from "react";
import mainPageAuth from "./pages/mainPageAuth";



function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/newpost" component={NewPost} />
        <Route exact path="/" component={mainPageunAuth} />
        <Route exact path="/authMain" component={mainPageAuth} />

      </Switch>
    </Router>
  );
}

export default App;
