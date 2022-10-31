import React from 'react'
import './index.css'

const PastGames = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-stone-900 to-stone-600'>
      <form className="w-2/3">
        <input type="text" id="league"></input>
        <br/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Submit">Click</button>

      </form>


      
    </div>


      
  )
}

export default PastGames
