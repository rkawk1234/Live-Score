import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Livescore from './components/livescore';
import Play from './components/play'
import jwt_decode from 'jwt-decode'
import { useState } from 'react'

import {
  FaBars,
  FaTimes,

} from 'react-icons/fa'


function App() {

  const [curstate, setCurstate] = useState(false)
  const token = localStorage.getItem('token')
  var user
  if (token) {
    user = jwt_decode(token)

  }
  else {
    user = {}
  }
  console.log(user)

  const [bool, setBool] = useState(token)





  return (

    <div className="App">
      <Router>



        <div className='flex justify-between w-full  h-20 bg-gray-900'>

          <div className='my-auto pl-5 text-gray-500 hover:scale-125'>Points: {user ? user.points : ""}</div>

          <ul className='hidden md:flex'>


            <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 '>
              <Link to="/">Home</Link>
            </li>


            {bool && <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
              <Link to='/livescore'>Live Score</Link>
            </li>}

            {bool && <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
              <Link to='/play'>Play</Link>
            </li>}

            <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
              <Link to='/register'>Register</Link>
            </li>

            {!bool && <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
              <Link to='/login'>Login</Link>
            </li>}

            {bool && <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'
              onClick={() => {
                localStorage.clear()
                setBool(!bool)

              }}><Link to='/login'>Logout</Link></li>}


          </ul>
          <div
            onClick={() => setCurstate(!curstate)}
            className='my-auto cursor-pointer pr-4 z-10 text-gray-500 md:hidden '>
            {curstate ? <FaTimes size={30} /> : <FaBars size={30} />}

          </div>
          {curstate && (
            <ul className='flex flex-col juistify-center items-center
            absolute top-0 left-0 w-full h-screen bg-gradient-to-b
             from-black to-gray-800 text-gray-500'>
              <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 '>
                <Link to="/">Home</Link>
              </li>

              {bool && <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
                <Link to='/livescore'>Live Score</Link>
              </li>}

              {bool && <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
                <Link to='/play'>Play</Link>
              </li>}

              <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
                <Link to='/register'>Register</Link>
              </li>

              {!bool && <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
                <Link to='/login'>Login</Link>
              </li>}

              {bool && <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'
                onClick={() => {
                  localStorage.clear()
                  setBool(!bool)

                }}><Link to='/login'>Logout</Link></li>}


            </ul>

          )}

        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/livescore' element={<Livescore />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/play' element= {<Play />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
