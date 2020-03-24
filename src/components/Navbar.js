import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar bg-primary'>
      <a href='/'>
        <img src='/edinfoodlogoalpha.png' className='Logo' alt='logo' />
      </a>
      <h1 className='mainheader'>Edinburgh Food Health & Safety Check</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
