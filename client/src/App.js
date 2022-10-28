import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Blog from './components/blog';
import {useState,useEffect} from 'react'
import jwt_decode from 'jwt-decode'



function App() {
  const token = localStorage.getItem('token')
  const user = jwt_decode(token)

  const [log,setLog] =  useState("Login")
  useEffect(()=> {
    
    if (token){
      
      setLog("Logout")

      // if (!user){
      //   localStorage.removeItem('token')
      //   navigate('/')
      // } else{

        

      // }
    }

      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
  
      <div className="App">
        <Router>

        <ul className='flex justify-between'>

          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 '>
            <Link to="/">Home</Link>
          </li>
          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/login'>{log}</Link>
          </li>
          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/register'>Register</Link>
          </li>
          <li className='mr-2'>User: {user.email}</li>
        </ul>
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
