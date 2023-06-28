import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = ({setIsLoggedin}) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const [showPassword, setShowpassword] = useState(false)

    function changeHandler(event){
        setFormData( (prevData)=>(
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event){
        event.preventDefault()
        setIsLoggedin(true)
        toast.success("Logged in") 
        navigate('/dashboard')
        console.log("printing the login data")
        console.log(formData)
    }

  return (
    
    <form onSubmit={submitHandler} className='flex flex-col gap-y-4 w-full mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-pink-200'>*</sup>
            </p>
            <input className='bg-gray-800 h-10 rounded-md'
            type='email' 
            required 
            value={formData.email} 
            onChange={changeHandler}
            placeholder='Enter Email ID'
            name='email' />
        </label>

        <label className='flex flex-col gap-y-1 relative'>
            <p>
                Password <sup className='text-red-600'>*</sup>
            </p>
            <input  className='bg-gray-800 h-10 rounded-md'
            type= {showPassword ? ("text") : ("password")}
            required 
            value={formData.password} 
            onChange={changeHandler}
            placeholder='Enter password'
            name='password' />

            <span className='absolute right-3 bottom-11' onClick={() => setShowpassword((prev) => !prev)}>
                {
                    showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                }
            </span>

            <Link className='flex justify-end' to='#' >
                <p>Forgot password</p>
            </Link>
        </label>


          <button onhover className='flex justify-center bg-yellow-400 text-black rounded-md h-8'>Sign In</button>      

        
    </form>
  )
}

export default LoginForm