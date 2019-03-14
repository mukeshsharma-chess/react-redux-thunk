import React from 'react'

import { Link } from 'react-router-dom';
import './nav.css'
// import allPost from '../demo/allPost'
// import postForm from '../demo/postForm';
 
const Navbar = () => {
    return(
        <nav className="header">
            <div className="Container">
                <h4 className="title">Poke'Times</h4>
                <ul className="right">
                <li><Link className="anchor" to ={"/"}>Post_Form</Link></li>
                <li><Link className="anchor" to ={"/signup"}>Sign_Up</Link></li>
                <li><Link className="anchor" to ={"/allpost"}>AllPost</Link></li>
                <li><Link className="anchor" to ={"/showdata"}>UserData</Link> </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;