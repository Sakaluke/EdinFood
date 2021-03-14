import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <h1>
        <i class='fas fa-copyright' style={{ fontWeight: '400' }}></i> Copyright{' '}
        {new Date().getFullYear()} deniscorlotean.com
      </h1>
    </div>
  );
}

export default Footer;
