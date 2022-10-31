import React from 'react'

import './index.css'


const Livescore = () => {

  var liveData
  const fetch = require('node-fetch');

  const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&timezone=America%2FToronto';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a7bc8e7b5fmsh878701ce1dc6cb3p1d0d8fjsn07f3e8faa102',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
  



  






  return (
    <div className='h-screen w-full bg-gradient-to-b from-stone-600 to-stone-300'>


    </div>

  )
}
export default Livescore

