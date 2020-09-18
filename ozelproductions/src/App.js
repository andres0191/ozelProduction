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
          <nav class="navbar navbar-expand-lg navbar-light bg-light header" >
            <img src="https://ozelproducciones.com/app/themes/ozel/dist/images/iso-triangle-white.svg?id=1cb39a9af6741f0793b3" width="50"/>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link className='nav-item nav-link' style={{color: 'white'}} to='/'>Inicio<span class="sr-only">(current)</span></Link>
                <Link className='nav-item nav-link' style={{color: 'white'}} to='/About'>Nosotros<span class="sr-only">(current)</span></Link>
                <Link className='nav-item nav-link' style={{color: 'white'}} to='/Login'>Boleteria<span class="sr-only">(current)</span></Link>
              </div>
            </div>
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
    </Router>
  );
}
