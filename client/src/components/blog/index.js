import React from 'react'

import './index.css'


const Blog = () => {




  return (
    <div className='h-screen w-full bg-gradient-to-b from-stone-600 to-stone-300'>

      <div id="deck">
      </div>

      <div className="Board">
        Board goes here
      </div>
      <div className="Player">
        Player's cards
      </div>
      <div className="Opponent">
        Opponent's card
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reveal Card</button>

      
      

    </div>

  )
}
export default Blog

