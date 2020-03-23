import React, { useState } from 'react';

const Location = ({ setMarker }) => {
  const fireMe = () => {
    console.log('haha');
  };

  return (
    <div>
      <button type='button' className='button' onClick={fireMe}>
        CLICK ME BITCH
      </button>
    </div>
  );
};

export default Location;
