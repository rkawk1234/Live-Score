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
      const name = user.name
      console.log(name)
      // if (!user){
      //   localStorage.removeItem('token')
      //   navigate('/')
      // } else{

        

      // }
    }
    else{
      navigate('/login')

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
