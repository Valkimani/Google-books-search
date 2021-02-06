import React from 'react';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (


        <nav>
    <div class="nav-wrapper">
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li>
            <NavLink to="/save" activeStyle={{backgroundColor: "rgba (0,0,0,0,0)"}}>Save</NavLink>
            </li>
        <li><NavLink to="/search" activeStyle={{backgroundColor: "rgba (0,0,0,0,0)"}}>Save</NavLink>
            </li>
      </ul>
    </div>
  </nav>


        
  );
}

export default NavBar;