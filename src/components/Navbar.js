import React from 'react';

function Navbar() {
  return (
    <nav className='navbar bg-primary'>
      <a href='/'>
        <img src='/edinfoodlogoalpha.png' className='Logo' alt='logo' />{' '}
      </a>
      <h1>Edinburgh Food Health & Safety Check</h1>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
