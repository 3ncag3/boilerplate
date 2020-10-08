import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Auth from './hoc/auth'
import Footer from './components/views/Footer/Footer'
import NavBar from './components/views/NavBar/NavBar'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       {/* Edit <code>src/App.js</code> and save to reload. */}
    //       Hello
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <hr />


        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)}/>
          <Route exact path="/login" component={Auth(LoginPage, false)}/>
          <Route exact path="/register" component={Auth(RegisterPage, false)}/>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home </h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About </h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard </h2>
    </div>
  );
}

export default App;
