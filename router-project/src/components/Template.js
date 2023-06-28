import React from 'react'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import frameImage from '../assets/frame.png'
import {FcGoogle } from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedin}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0'>

        <div className='w-[450px] flex flex-col gap-y-3'>
            <h1 className='text-[1.875rem] text-richblack-5 font-semibold leading-[2.375rem]'>
                {title}
            </h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100 '>{desc1}</span>
                <br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            
            {
                formtype === 'signup' ? 
                <SignupForm setIsLoggedin={setIsLoggedin} /> : 
                <LoginForm setIsLoggedin={setIsLoggedin}   />
            }

            <div className='flex w-full items-center justify-center gap-1'>
                <div className='h-[1px] w-full  bg-richblack-700'></div>
                <div className='text-richblack-700 font-medium leading[1.375rem]'>Or</div>
                <div className='h-[1px] w-full  bg-richblack-700'></div>
            </div>

            <button className='flex w-full  justify-center border border-richblack-700 font-medium text-richblack-100 
            items-center rounded-[8px] px-[12px] py-[8px] gap-x-2 mt-6 '>
                <FcGoogle />
                <p>Sign in with google</p>
            </button>
            
        </div>

        <div className='relative w-11/12 max-w-[450px] '>
            <img src={frameImage} width={558} height={504} loading='lazy' />
            <img className='absolute -top-4 right-4' src={image} width={558} height={504} loading='lazy' />
        </div>
    </div>
  )
}

export default Template