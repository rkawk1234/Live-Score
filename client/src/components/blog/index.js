import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

import './index.css'


const Blog = () => {
  const navigate = useNavigate()

  useEffect(()=> {
    const token = localStorage.getItem('token')
    if (token){
      const user = jwt_decode(token)
      console.log(user)
      if (!user){
        localStorage.removeItem('token')
        navigate('/login')
      } else{

        <div></div>

      }
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return(
    <div>
          Welcome To the Poker Blog!
       </div>

  )
}
export default Blog
