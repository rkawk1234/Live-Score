import React from 'react'
import {useState} from 'react'
import './index.css'

const Register = () => {

    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('') 
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password1,
                password2,
            }),
        })

        const data = await response.json()
        console.log(data)
        // if (data.status === 'ok'){
        //     history.pushState('/login')
        // }
    }

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <form onSubmit ={registerUser} class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Full Name" />

                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Email" />

                    <input 
                        value ={password1}
                        onChange={(e) => setPassword1(e.target.value)}
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Password" />
                    <input 
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        value = "Register"
                        class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Create Account</button>
                </form>

                <div class="text-grey-dark mt-6">
                    Already have an account?
                </div>
            </div>
        </div>
  )
}

export default Register
