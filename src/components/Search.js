import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

const Search = ({ searchName, clearAllMarkers, showClear, setAlert }) => {
  const [text, setText] = useState('');

  // console.log(`this is clearmarkers in search : ${clearMarkers}`);
  const onSubmit = e => {
    e.preventDefault();
    clearAllMarkers(true);
    if (text === '') {
      setAlert(' Please enter something', 'danger');
      console.log('Type a business is empty');
    } else {
      searchName(text);
      setText('');
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Type a business...'
          value={text}
          onChange={onChange}
        />

        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

// Search.propTypes = {
//   searchUsers: PropTypes.func.isRequired,
//   clearUsers: PropTypes.func.isRequired,
//   showClear: PropTypes.bool.isRequired,
//   setAlert: PropTypes.func.isRequired
// };
export default Search;
