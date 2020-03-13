import React from 'react';
import './Home.css';
import SideHero from '../components/sideHero.jsx';
import Navbar from '../components/Navbar.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="home-wrapper">
        <SideHero />

        <div className="main">
          <Navbar />
          <Route path="/auth/signup" component={Signup} />
          <Route path="/auth/login" component={Login} />
        </div>
      </div>
    </div>
  );
}

export default App;