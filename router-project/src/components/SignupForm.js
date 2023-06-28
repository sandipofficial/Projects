import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedin}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        createpass:"",
        confirmpass:""
    })

    const [showPassword, setShowpassword] = useState(false)
    const [accountType, setAccountType] = useState("student")

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
        if(formData.createpass != formData.confirmpass){
            toast.error("Password do not match")
            return
        }
        setIsLoggedin(true)
        toast.success("Account created")
        const accountdata = {
            ...formData

        }
        const finalData = {
            ...accountdata, accountType
        }
        console.log("printing the signup data")
        console.log(finalData)
        console.log("account data")
        navigate('/dashboard')
    }

  return (
    <div className='flex flex-col text-white'>
        <div >
            <button 
            className={`${accountType === "student" ?
            "bg-richblack-900 text-richblack-5"
            :
            "bg-transparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button 
            className={`${accountType === "Instructor" ?
            "bg-richblack-900 text-richblack-5"
            :
            "bg-transparent text-richblack-200"
            } py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("Instructor")}>
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler} className=' flex flex-col gap-y-4 '>
            <div className=' flex justify-between gap-3 '>
                <label className='flex flex-col gap-y-1'>
                    <p>
                        First Name <sup className='text-red-600'>*</sup>
                    </p>
                    <input className='bg-gray-800 h-10 rounded-md'
                    type='text' 
                    required 
                    value={formData.firstname} 
                    onChange={changeHandler}
                    placeholder='Enter first name'
                    name='firstname' />
                </label>

                <label className='flex flex-col gap-y-1'>
                    <p>
                        Last Name <sup className='text-red-600'>*</sup>
                    </p>
                    <input className='bg-gray-800 h-10 rounded-md'
                    type='text' 
                    required 
                    value={formData.lastname} 
                    onChange={changeHandler}
                    placeholder='Enter last name'
                    name='lastname' />
                </label>
            </div>

            <label className='flex flex-col gap-y-1'>
                <p>
                    Email Address <sup className='text-red-600'>*</sup>
                </p>
                <input className='bg-gray-800 h-10 rounded-md'
                type='email' 
                required 
                value={formData.email} 
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email' />
            </label>

            <div className=' flex justify-between gap-3 '>
                <label className='flex flex-col relative gap-y-1'>
                    <p>
                        Create Password <sup className='text-red-600'>*</sup>
                    </p>
                    <input className='bg-gray-800 h-10 rounded-md'
                    type= {showPassword ? ("text") : ("password")}
                    required 
                    value={formData.createpass} 
                    onChange={changeHandler}
                    placeholder='Enter password'
                    name='createpass' />

                    <span className='absolute right-3 bottom-3' onClick={() => setShowpassword((prev) => !prev)}>
                        {
                            showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                        }
                    </span>
                </label>

                <label className='flex flex-col relative gap-y-1'>
                    <p>
                        Confirm Password <sup className='text-red-600'>*</sup>
                    </p>
                    <input className='bg-gray-800 h-10 rounded-md'
                    type= {showPassword ? ("text") : ("password")}
                    required 
                    value={formData.confirmpass} 
                    onChange={changeHandler}
                    placeholder='Confirm password'
                    name='confirmpass' />

                    <span className='absolute right-3 bottom-3'  onClick={() => setShowpassword((prev) => !prev)}>
                        {
                            showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                        }
                    </span>
                </label>
            </div>

            <button className='flex justify-center items-center bg-yellow-400 text-black rounded-md h-8'>
                <p>Create Account</p>     
            </button>
        </form>
    </div>
    
  )
}

export default SignupForm