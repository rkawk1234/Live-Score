import React from 'react'
import {useState} from 'react'
import './index.css'



const Login = () => {

    const [email, setEmail ] = useState('') 
    const [password, setPassword] = useState('')


    async function loginUser(event) {

        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,

            }),
        })

        const data = await response.json()
        if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Please check your username and password')
		}
        // if (data.status === 'ok'){
        //     history.pushState('/login')
        // }
    }

    return (

        <div className="w-full max-w-xs">
            <form onSubmit={loginUser} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        email
                    </label>
                    <input
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type ="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password"
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="*************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button 
                    type="submit"
                    value="Login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                        Sign In
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Register
                    </button>

                </div>
            </form>
        </div>




    )
}


export default Login
