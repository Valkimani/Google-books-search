import React from 'react';


const NavBar = () => {
    return (

        <ul className="nav">
  <li className="nav-item">
    <link className="nav-link active" href="/search">Search</link>
  </li>
  <li className="nav-item">
    <link className="nav-link" href="/saved">Saved</link>
  </li>
</ul>
  );
}

export default NavBar;