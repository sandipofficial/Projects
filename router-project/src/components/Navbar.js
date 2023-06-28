import React from 'react'
import logo from '../assets/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Navbar = (props) => {

  let isLoggedin = props.isLoggedin
  let setIsLoggedin = props.setIsLoggedin  

  return (
    <div className='flex justify-between py-4 w-11/12 max-w-[1160px] mx-auto items-center  '>
      <Link to='/' className='p-3'>
        <img src={logo} alt='Logo'width={160} height={32} loading='lazy'/>
      </Link>

      <div className='text-richblack-100 flex  gap-x-6'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/'>Contact</NavLink> 
      </div>

      <div className=' flex  items-center gap-x-4'>
        { !isLoggedin &&
          <Link to='/login' className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
          <button>Log in</button>
        </Link>
        }
        
        { !isLoggedin &&
          <Link to='/signup' className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
          <button>Sign up</button>
        </Link>
        }

        { isLoggedin &&
          <Link to='/' className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
          <button onClick={() => {
            setIsLoggedin(false)
            toast.success("Logged out")
          }}
          >Logout</button>
        </Link>
        }

        { isLoggedin &&
          <Link to='/dashboard' className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
          <button>Dashboard</button>
        </Link>
        }
      </div>
    </div>
  )
}

export default Navbar