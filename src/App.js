import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Results from './components/Results';
import Mapquest from './components/Mapquest';
import Alert from './components/Alert';
import Footer from './components/Footer';
import axios from 'axios';
import About from './pages/About';
import './App.css';
import data from './health.json';
import Axios from 'axios';

function App() {
  const [filterData, setFilterData] = useState([]);
  const [filterPostcodes, setFilterPostcode] = useState([]);
  const [showMarkers, setShowMarkers] = useState(false);
  const [alert, setAlert] = useState(null);
  const [latLng, setLatlng] = useState([55.9533, -3.1883]);

  console.log(`filterData is:  ${filterData}`);

  const searchName = text => {
    let objectsMatchingSearch = data.filter(item => {
      return item['Premises Name']
        .toLocaleUpperCase()
        .includes(text.toLocaleUpperCase());
    });
    // console.log(objectsMatchingSearch);
    return setFilterData(objectsMatchingSearch);
  };

  // Filter Postcodes
  useEffect(() => {
    if (filterData.length > 0) {
      const filterPostcodes = filterData.map(item => {
        return item.Postcode;
      });
      setFilterPostcode(filterPostcodes);
    }
  }, [filterData]);
  // --------------------------------------------------------------------

  //Convert Postcodes into lat and lng by making this api request
  const convertPostcodes = async value => {
    const res = await axios.get(`https://api.postcodes.io/postcodes/${value}`);

    setLatlng([res.data.result.latitude, res.data.result.longitude]);
  };
  // let theArray = [];

  // const convertPostcodes = async value => {
  //   const res = await axios
  //     .get(`https://api.postcodes.io/postcodes/${value}`)
  //     .then(res => {
  //       setLatlng([res.data.result.latitude, res.data.result.longitude]);

  //     });
  // };

  const clearAllMarkers = bool => {
    setShowMarkers(bool);
  };

  useEffect(() => {
    if (filterPostcodes.length > 0) {
      filterPostcodes.forEach(convertPostcodes);
      clearAllMarkers(false);
    }
  }, [filterPostcodes]);
  //Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 4000);
  };
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Mapquest
          height='30vh'
          width='100%'
          center={latLng}
          tileLayer={'map'}
          zoom={12}
          apiKey={`${process.env.REACT_APP_EDINFOOD_MAPQUEST_KEY}`}
          cleanUp={showMarkers}
          data={filterData}
        />
        <Alert alert={alert} />
        <Search
          searchName={searchName}
          clearAllMarkers={clearAllMarkers}
          showClear={filterData.length > 0 ? true : false}
          setAlert={showAlert}
        />
        <Results items={filterData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
