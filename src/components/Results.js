import React from 'react';

function Results({ items }) {
  return items.map(item => (
    <div className='result'>
      <div className='result-info'>
        <h1>{item['Premises Name']}</h1>
        <h3>Postcode: {item.Postcode} </h3>
        <h3>Last Inspection: {item['Inspection Date']}</h3>
        <h1>Status:{item['FHIS Status']} </h1>
        {console.log(
          `meow is: ${item['FHIS Status'] === 'Improvement Required          '}`
        )}
      </div>
      <div>
        {item['FHIS Status'] === 'Improvement Required          ' ? (
          <img src='/Edin-Fail.png' className='imgg' />
        ) : (
          <img src='/Edin-Pass.png' className='imgg' />
        )}
      </div>
    </div>
  ));
}

export default Results;
