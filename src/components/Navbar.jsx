import React from 'react'
import image from '../assets/logo.png'
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {
  const{openSignIn}=useClerk()
    const {user}=useUser()
    const navigate=useNavigate()
  return (
    <div className='flex items-center w-full h-20 bg-gradient-to-r from-blue-400 to-blue-600'>
        <div className='p-5 ml-6'>
            <img src={image} width={150} height={10} alt="" />
        </div>
        <div className='ml-150 p-2 flex'> 
            <Link to='/' className='p-2 text-white'>Home</Link>
            <Link to='/about' className='p-2 text-white'>About</Link>
            <Link to='/popular'className='p-2 text-white'>Popular</Link>
          
            {
            user?<div className='flex items-center gap-3'>
              <Link to='/cart'>View cart</Link>
                <p>|</p>
                <p className='max-sm:hidden'>Hi, {user.firstName+" "+user.lastName}</p>
                <UserButton/>
            </div>:
            <div className='flex gap-4 max-sm:text-xs'>
        <button onClick={e=>openSignIn()} className='bg-blue-500 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
        <button  className='text-gray-600'>Sales Login</button>  
        </div>
        }
        </div>
    </div>
  )
}

export default Navbar