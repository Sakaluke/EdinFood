import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <h1>
        <i class='fas fa-copyright'></i> Copyright {new Date().getFullYear()}{' '}
        Goosefx.com
      </h1>
    </div>
  );
}

export default Footer;
