import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Blog from './components/blog';


function App() {
  return (
  
      <div className="App">
        <Router>

        <ul className='pr-12 hidden md:flex'>

          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 '>
            <Link to="/">Home</Link>
          </li>
          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/login'>Login</Link>
          </li>
          <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
            <Link to='/register'>Register</Link>
          </li>
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
