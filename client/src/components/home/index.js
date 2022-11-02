import React from 'react'
import { useEffect,useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import './index.css'

//react gets the imported function from the whatever js file there is in a specified address
const Home = () => {
        const [find,setFind]= useState(false)
        const [userInput,setUserinput] = useState([])
        let data =[]

        // const handleFilter = (event) =>{
        //   const searchWord = event.target.value
        //   const newFilter = data.filter((value) =>{
        //     return value.includes(searchWord) 
        //   })
        //   setDatalist(newFilter) 
        // }


        async function handleChange(event){
          setUserinput(event.target.value)
          setFind(false)
        }
        // async function handleSubmit(event){
        //   alert()
        // }



  

  useEffect(() =>{
    const fetch = require('node-fetch');
    let url

    if (find&&data.includes(userInput)){
      url = 'https://api-football-v1.p.rapidapi.com/v3/leagues?country='+userInput

    }
    else{
      url= ""
    }
    

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a7bc8e7b5fmsh878701ce1dc6cb3p1d0d8fjsn07f3e8faa102',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => {
    for (let i=0; i< json.response.length; i++){
      document.getElementById("aSec").innerHTML += "<div><p>" + json.response[i].league+ "</p></div>"
    }



  })
	.catch(err => console.error('error:' + err));
  })


  useEffect(() => {
    const fetch = require('node-fetch');

    const url = 'https://api-football-v1.p.rapidapi.com/v3/teams/countries';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a7bc8e7b5fmsh878701ce1dc6cb3p1d0d8fjsn07f3e8faa102',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        for (let i = 0; i < json.response.length; i++) {
          // document.getElementById("country").innerHTML += "<div><p className='' key={key} >" + json.response[i].name+ "</p></div>"
          data.push(json.response[i].name)
          

        }
        
      })
      .catch(err => console.error('error:' + err));





      
  })



  return (
    <div className='h-full w-full flex justify-center bg-gradient-to-b from-zinc-500 to-zinc-700'>
      <div className= "grid grid-cols-4 w-full h-screen">
        <div id="country" className=" col-span-1 break-all">
          <div className='flex flex-cols'>
          <input className= "h-8"type="text" placeholder="Enter country" onChange={handleChange}/>
          <div className=''>
          <FaSearch onClick={()=>
          setFind(true)
          }/>
          </div>
          </div>
          <div className='text-4lg text-neutral-300'>Countries</div>
            
          </div>

        <div id="aSec" className="col-span-3">
          Another section
        </div>

      </div>

    </div>
  )
}

export default Home
