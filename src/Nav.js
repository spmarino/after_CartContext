import React from 'react'
import './header.css'
import { BsCartFill } from "react-icons/bs";
import {Link} from 'react-router-dom'


function Nav({links}) {

    return (
        <div className="Menu">

            
          
            <ul>
            <img style={{height:"60px", width:"auto", float:"left", padding:"5px" }} src="/images/logo.png" alt="logo"/>
                <li><Link to="/">Home</Link></li>

{links.map((link, i) => (<li key={i}><Link  to={`/category/${link}`}>{link}</Link></li>))}

<li className="carWidget"><Link style={{padding:"5px 10px"}}to="/cart"><BsCartFill/></Link></li>


            </ul>
           
        </div>
    )
}

export default Nav

