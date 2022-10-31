import React from 'react'

// import {useState} from 'react'

import './index.css'



const Livescore = () => {
  // const [matchData,setMatchData] = useState({})
  // const [team,setTeam] = useState({})

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
    .then(res => 
      res.json()
    )
    .then(json => {
      console.log(json.response.length)

      for (let i=0; i<json.response.length;i++){

        document.getElementById("liveData").innerHTML += "<tr> <td>"+ json.response[i].teams.home.name +"</td> <td>"+ json.response[i].goals.home +"</td> <td>"+json.response[i].goals.away+" </td>  <td>"+ json.response[i].teams.away.name +"</td> </tr>"
      }
      

})
    .catch(err => console.error('error:' + err));
  



  






  return (
    <div className='h-screen w-full bg-gradient-to-b from-stone-600 to-stone-300'>

      <table id="liveTable"className='table-auto w-full text-center'>
        <thead className="w-full">
          <tr className="w-full  justify-between">
            <th>Home</th>
            
            <th>Home Score</th>
            <th>Away Score</th>

            <th>Away</th>
          </tr>
        </thead>

        <tbody id="liveData">


        </tbody>


      </table>



    </div>

  )
}
export default Livescore

