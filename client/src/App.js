import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Blog from './components/blog';
// import {useState,useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useState} from 'react'
// import {useState } from 'react'

// function useForceUpdate(){
//   const [value,setValue] = useState(0)
//   return () => setValue(value => value+1)
// }

function App() {


  const token = localStorage.getItem('token')
  var user
  if (token){
    user = jwt_decode(token)

  }
  else{
    user = {}
  }
  console.log(user)

  const [bool,setBool] = useState(token)





  return (
  
      <div className="App">
        <Router>

        

      <div className='flex justify-between w-full  h-20 bg-gray-900'>

      <div className='my-auto pl-5 text-gray-500 hover:scale-125'>Points: {user ? user.points : ""}</div>

        <ul className='md:flex'>
          

          <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 '>
            <Link to="/">Home</Link>
          </li>

          
          <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/blog'>Blog</Link>
          </li>

          <li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/register'>Register</Link>
          </li>
        
           {!bool &&<li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/login'>Login</Link>
          </li>}
          
          {bool &&<li className='px-8 my-auto cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'
              onClick={()=>{
                localStorage.clear()
                setBool(!bool)
                
              }}><Link to='/login'>Logout</Link></li>}

          
        </ul>
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
        </Router>
      </div>

  );
}

export default App;
