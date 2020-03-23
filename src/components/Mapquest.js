import React, { useEffect, useState } from 'react';

const Mapquest = ({
  height,
  width,
  center,
  tileLayer,
  zoom,
  apiKey,
  cleanUp,
  data
}) => {
  console.log(`center is !!!!!!!: ${center}`);
  const [locations, setLocations] = useState([]);

  // const [locationsReady, setLocationsReady] = useState([]);
  console.log(`locations is: ${locations}`);
  // useEffect(() => {
  //   setLocations(prevState => [...prevState, center]);
  // }, [center]);
  // console.log(`locationsREADY are: ${locationsReady}`);
  useEffect(() => {
    setLocations(prevState => [...prevState, center]);
  }, [center]);

  let marker;
  let map;
  let layerGroup;

  //initilize map
  useEffect(() => {
    window.L.mapquest.key = apiKey;
    map = window.L.mapquest.map('map', {
      center,
      layers: window.L.mapquest.tileLayer(tileLayer),
      zoom
    });

    layerGroup = window.L.layerGroup().addTo(map);
    map.addControl(window.L.mapquest.control());

    console.log(`cleanup is: ${cleanUp}`);
    if (cleanUp === true) {
      layerGroup.clearLayers();
    } else {
      showMarkers();
    }
    return () => {
      map.remove();
    };
  }, [locations]);

  // display marker function

  const showMarkers = () => {
    locations.forEach((item, index) => {
      marker = window.L.mapquest
        .textMarker([item[0], item[1]], {
          position: 'right',
          type: 'marker',
          draggable: false,

          icon: {
            primaryColor: '#333333',
            secondaryColor: '#333333',
            size: 'md'
          }
        })
        .bindPopup(
          data[index]['FHIS Status'] === 'Improvement Required          '
            ? `<h4><center> ${data[index]['Premises Name']}<center/><h4/> <p style="color:red"> ${data[index]['FHIS Status']} <p/>`
            : `<h4><center> ${data[index]['Premises Name']}<center/><h4/> <p style="color:blue"> ${data[index]['FHIS Status']} <p/>`
        )

        // `${data[index]['FHIS Status']}` === `Improvement Required`
        //   ? `<p style="color:red"> ${data[index]['FHIS Status']} <p/>`
        //   : `<p style="color:blue"> ${data[index]['FHIS Status']} <p/>`

        // `<h4><center> ${data[index]['Premises Name']}<center/><h4/> <p style="color:blue"> ${data[index]['FHIS Status']} <p/>`

        .addTo(layerGroup);
    });
  };

  useEffect(() => {
    setLocations([]);
  }, [cleanUp]);

  return <div id='map' style={{ width, height }}></div>;
};
export default Mapquest;
