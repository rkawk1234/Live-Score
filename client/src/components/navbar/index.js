import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return (
        <div>
            {/* <ul className='pr-12 hidden md:flex'>

                <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 '>
                    <Link to="/"></Link>
                </li>
                <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
                    <Link to='/blog'></Link>
                </li>
                <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
                    <Link to='/login'></Link>
                </li>
                <li className='px-4 pb-2 pt-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200'>
                    <Link to='/register'></Link>
                </li>
            </ul> */}
            <ul>

                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/login'></Link>
                </li>
                <li>
                    <Link to='/register'></Link>
                </li>
            </ul>

        </div>
    )
}

export default Navbar
