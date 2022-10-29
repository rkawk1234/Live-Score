import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Blog from './components/blog';
// import {useState,useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import {useState } from 'react'

// function useForceUpdate(){
//   const [value,setValue] = useState(0)
//   return () => setValue(value => value+1)
// }

function App() {

  const [bool, setBool] = useState(true)


  // const handleClick = event =>{
  //   setBool(!bool)
  // }
  // const forceUpdate = useForceUpdate()
  const token = localStorage.getItem('token')
  var user
  if (token){
    user = jwt_decode(token)

  }
  else{
    user = {}
  }
  
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[])
  return (
  
      <div className="App">
        <Router>

        <ul className='flex justify-evenly border-4 border-gray-600'>

          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 '>
            <Link to="/">Home</Link>
          </li>

          {bool&& (
          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/blog'>Blog</Link>
          </li>)}

          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/register'>Register</Link>
          </li>
          {!bool && (<li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/login'>Login</Link>
          </li>)}
          
          {bool &&(<li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'
              onClick={()=>{
                localStorage.clear()
                setBool(!bool)
                
                // bool= !bool
                
              }}><Link to='/login'>Logout</Link></li>)}

          <li className='mr-2'>User: {user ? user.email : ""}</li>
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
