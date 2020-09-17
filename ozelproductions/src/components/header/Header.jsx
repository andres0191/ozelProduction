import React from 'react';
import '../header/style.scss';
import { BrowserRouter as Router, Link} from "react-router-dom";

export default function Header(){
    return(
        <Router>
            <Link to='/About' ></Link><li  className='listof'>About</li>
            <Link to='/Login'></Link><li  className='listof'>Login</li>
            <Link to='/'></Link><li  className='listof'>Home</li>            
        </Router>
    )
}