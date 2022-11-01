import React from 'react'
import './index.css'
// import { useEffect } from 'react';


const PastGames = () => {




  return (
    <div className='h-screen w-full bg-gradient-to-b from-stone-900 to-stone-600'>


      <form onSubmit={""} className=" flex flex-col shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center">
        <input type="text" className="w-1/5"></input>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/12" >
          Submit
        </button>

      </form>


 


      <table id="liveTable" className="table-fixed w-full text-center border-separate border border-green-800">
        <thead>
          <tr >
            <th></th>
            <th>Home</th>

            <th>Home Score</th>
            <th>Away Score</th>

            <th>Away</th>
            <th></th>
          </tr>
        </thead>

        <tbody id="liveData">


        </tbody>


      </table>



    </div>



  )
}

export default PastGames
