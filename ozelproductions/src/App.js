import React from 'react';
import './App.css';
import About from './components/about/About';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './components/images/icons/logotomorrowland.png'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
        <ul class="nav justify-content-end">
        <img src={logo} className='logo' />
          <li class="nav-item">
            <Link class="nav-link active" to="/About">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Login">Login</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/Home">Home</Link>
          </li>
        </ul> 
        </nav>
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/* <ul class="nav justify-content-end">
  <li class="nav-item">
    <Link class="nav-link active" to="/About">About</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link to="/Login">Login</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Login">Login</Link>
  </li>
</ul> 

<img src={logo} className='logo' />

          <ul  className='listof'>
          
            <li className='about'>

              <Link to="/About">About</Link>
            </li>
            <li className='about'>
              <Link to="/Login">Login</Link>
            </li>
            <li className='about'>
              <Link to="/">Home</Link>
            </li>
          </ul>*/