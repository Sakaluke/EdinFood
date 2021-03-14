import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <center><h1>About this App</h1>
      <br/>
      <h2>Food hygiene information Scheme Check in Edinburgh Area</h2>
      <br/>
      <p style={{width:'50%'}}>Web app concept designed to check "Food hygiene information Scheme" to all hospitality related businesses in Edinburgh area (Restaurants, Pubs, Hotels etc)
        All data used here its from Edinburgh`s Council Open Data Catalog and the food hygiene records are till 2019 period, once a user performs a search it will filter and
        display if that particular business passed the health and safety check during that time period.  </p>
        <br/>
      <p>Contact: deniscorlotean@gmail.com</p>
      <br/>
      <p>Version 1.0.0</p>
      </center>
      
    </Fragment>
  );
};

export default About;
